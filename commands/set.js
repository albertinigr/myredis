const { setValue } = require("../db");

module.exports.run = (args) => {
  if (args.length !== 2) {
    return "ERROR INPUT";
  }

  const [variable, value] = args;
  return setValue(variable, value);
};
