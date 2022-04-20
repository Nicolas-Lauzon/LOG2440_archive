const util = require("util");
const events = require("events");
const fs = require("fs");

const utils = require("../e2e/utils");

function CreateDocumentOutline() {
  events.EventEmitter.call(this);
}

util.inherits(CreateDocumentOutline, events.EventEmitter);

CreateDocumentOutline.prototype.command = function() {
  const self = this;
  self.api.injectScript("file:///" + __dirname + "\\node_modules\\h5o\\dist\\outliner.min.js");
  self.api.execute(function() {
    const outline = HTML5Outline(document.body);
    return outline.asHTML();
  }, [], function(result) {
    if (result.status === 0) {
      self.api.url(function(url) {
        const values = url.value.split(["/"]);
        const fileName = values[values.length - 1];
        const dir = utils.getWorkingDirectory() + "/outline";
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        fs.writeFile(dir + "/" + fileName, result.value, { flag : "w" }, function(err) {
          if (err) {
            console.error("An error occurred during the file saving.");
          }
          self.emit("complete");
        });
      });
    } else {
      console.error("Error during with the document outliner.");
      self.emit("complete");
    }
  });
  return this;
};

module.exports = CreateDocumentOutline;
