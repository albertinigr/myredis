const { beginTransaction } = require("../db");

module.exports.run = (args) => {
  if (args.length > 0) {
    return "ERROR INPUT";
  }

  return beginTransaction();
};
