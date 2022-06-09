const parseCommand = (line) => {
  const result = line.split(" ");
  return {
    cmd: result[0].toLowerCase(),
    args: result.splice(1),
  };
};
module.exports = {
  parseCommand,
};
