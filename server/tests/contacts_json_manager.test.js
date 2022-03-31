const path = require("path");
const fs = require("fs");
const { ContactJsonManager } = require("../js/managers/contacts_json_manager");
const contacts = require("../data/contacts.json").contacts;

async function restoreContacts () {
  const filePath = path.join(__dirname + "/contacts_test.json");
  await fs.promises.writeFile(filePath, JSON.stringify({ contacts }));
}

describe("Contact JSON Manager tests", () => {
  let contactJSONManger;
  const TEST_JSON_PATH = path.join(__dirname + "/contacts_test.json");

  beforeEach(() => {
    contactJSONManger = new ContactJsonManager();
    contactJSONManger.JSON_PATH = TEST_JSON_PATH;
  });

  afterEach(async () => {
    await restoreContacts();
  });

  it("getAllContacts should return all Contacts", async () => {
    const allContacts = await contactJSONManger.getAllContacts();
    expect(allContacts).toEqual(contacts);
  });

  it("addNewContact should add a new Contacts to the JSON", async () => {
    const contact = { name: "Jean Tremblay", email: "jean.tremblay@polymtl.ca", message: "Allo!" };
    const originalSize = contacts.length;
    await contactJSONManger.addNewContact(contact);
    const newContacts = JSON.parse(await fs.promises.readFile(TEST_JSON_PATH)).contacts;
    expect(newContacts.length).toEqual(originalSize + 1);
    expect(newContacts[newContacts.length - 1]).toEqual(contact);
  });

  it("deleteContactByID should delete an existing Contact with valid ID", async () => {
    const id = 1;
    const originalSize = contacts.length;
    const result = await contactJSONManger.deleteContactByID(id);
    const newSize = JSON.parse(await fs.promises.readFile(TEST_JSON_PATH)).contacts.length;
    expect(newSize).toEqual(originalSize - 1);
    expect(result).toEqual(true);
  });

  it("deleteContactByID should not delete an existing Contact with an invalid ID", async () => {
    const id = 99;
    const originalSize = contacts.length;
    const result = await contactJSONManger.deleteContactByID(id);
    const newSize = JSON.parse(await fs.promises.readFile(TEST_JSON_PATH)).contacts.length;
    expect(newSize).toEqual(originalSize);
    expect(result).toEqual(false);
  });
});
