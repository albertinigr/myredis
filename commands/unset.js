const { unsetVariable } = require("../db");

module.exports.run = (args) => {
  if (args.length !== 1) {
    return "ERROR INPUT";
  }

  const [variable] = args;
  return unsetVariable(variable);
};
