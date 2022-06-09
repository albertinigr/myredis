const { getValue } = require("../db");

module.exports.run = (args) => {
  if (args.length !== 1) {
    return "ERROR INPUT";
  }

  const variable = args[0];
  return getValue(variable);
};
