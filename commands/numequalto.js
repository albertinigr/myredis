const { numEqualTo } = require("../db");

module.exports.run = (args) => {
  if (args.length !== 1) {
    return "ERROR INPUT";
  }

  const [value] = args;
  return numEqualTo(value);
};
