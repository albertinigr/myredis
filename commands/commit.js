const { commitTransaction } = require("../db");

module.exports.run = (args) => {
  if (args.length > 0) {
    return "ERROR INPUT";
  }

  if (!commitTransaction()) {
    return "NO TRANSACTION";
  }
};
