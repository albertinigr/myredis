const { rollbackTransaction } = require("../db");

module.exports.run = (args) => {
  if (args.length > 0) {
    return "ERROR INPUT";
  }

  if (!rollbackTransaction()) {
    return "NO TRANSACTION";
  }
};
