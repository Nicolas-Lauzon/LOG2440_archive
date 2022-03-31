/* eslint-disable no-magic-numbers */

const app = require("../server");
const jsonManager = require("../js/routes/contacts").jsonManager;
const supertest = require("supertest");
const request = supertest(app);
const contacts = require("../data/contacts.json").contacts;

const API_URL = "/api/contacts";

describe("Contact API tests", () => {
  afterAll(async () => {
    jest.clearAllMocks();
    app.close();
  });
  it("GET request to api/contacts/ should get all Contacts and return 200", async () => {
    const response = await request.get(`${API_URL}/`);
    expect(response.body).toEqual(contacts);
    expect(response.status).toBe(200);
  });
  
  it("GET request to api/contacts/ should greturn 500 on error", async () => {
    jest.spyOn(jsonManager, "getAllContacts").mockImplementation(() => {
      throw new Error("");
    });
    const response = await request.get(`${API_URL}/`);
    expect(response.status).toBe(500);
  });

  it("POST request to api/contacts/ should create a new Contact and redirect with 302", async () => {
    const contact = { id: 999, name: "Jean Tremblay", email: "jean.tremblay@polymtl.ca", message: "Allo!" };
    jest.spyOn(jsonManager, "addNewContact").mockImplementation(() => {});
    const response = await request.post(`${API_URL}/`).send(contact).set("Accept", "application/json");
    expect(response.status).toBe(302);
  });

  it("POST request to api/contacts/ should not create a new Contact if no body and return 400", async () => {
    jest.spyOn(jsonManager, "addNewContact").mockImplementation(() => {});
    const response = await request.post(`${API_URL}/`).send(undefined).set("Accept", "application/json");
    expect(response.status).toBe(400);
  });

  it("POST request to api/contacts/ should return 500 on error", async () => {
    jest.spyOn(jsonManager, "addNewContact").mockImplementation(() => {
      throw new Error("");
    });
    const contact = { id: 999, name: "Jean Tremblay", email: "jean.tremblay@polymtl.ca", message: "Allo!" };
    const response = await request.post(`${API_URL}/`).send(contact).set("Accept", "application/json");
    expect(response.status).toBe(500);
  });

  it("DELETE request to api/contacts/ should delete an existing Contact and return 204 with a valid ID", async () => {
    jest.spyOn(jsonManager, "deleteContactByID").mockImplementation(() => true);
    const response = await request.delete(`${API_URL}/1`);
    expect(response.status).toBe(204);
  });

  it("DELETE request to api/contacts/ should return 404 with an invalid ID", async () => {
    jest.spyOn(jsonManager, "deleteContactByID").mockImplementation(() => false);
    const response = await request.delete(`${API_URL}/22`);
    expect(response.status).toBe(404);
  });

  it("DELETE request to api/contacts/ should return 500 on error", async () => {
    jest.spyOn(jsonManager, "deleteContactByID").mockImplementation(() => {
      throw new Error("");
    });
    const response = await request.delete(`${API_URL}/1`);
    expect(response.status).toBe(500);
  });
});
