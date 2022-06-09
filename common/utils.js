const parseCommand = (line) => {
  const result = line.split(" ").map(str => str.trim().toLowerCase());
  return {
    cmd: result[0],
    args: result.splice(1),
  };
};
module.exports = {
  parseCommand,
};
