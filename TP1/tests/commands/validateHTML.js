const util = require("util");
const events = require("events");
const w3cjs = require("w3cjs");

function ValidateHTML() {
  events.EventEmitter.call(this);
}

util.inherits(ValidateHTML, events.EventEmitter);

/**
 * Validates the HTML source of the current document.
 *
 * @param callback          The callback to call at the end of the operation.
 * @return {ValidateHTML}
 */
ValidateHTML.prototype.command = function(callback) {
  const self = this;
  self.api.source(function(source) {
    w3cjs.validate({
      input: "<!DOCTYPE html>\n" + source.value,
      callback: function (error, res) {
        let errors = [];
        if (res && res.messages.length > 0 ) {
          errors = res.messages.find(function(message) {
            return message.type === "error" || message.type === "warning";
          });
        }
        callback.call(self, errors);
        self.emit("complete");
      }
    });
  });
  return this;
};

module.exports = ValidateHTML;
