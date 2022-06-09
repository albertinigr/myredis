const stack = [];

const init = () => {
  stack.push({});
};

const currentContext = () => {
  if (!stack || stack.length == 0) {
    init();
  }
  return stack[stack.length - 1];
};

const exists = (variable, context) => Object.keys(context).includes(variable);

const setValue = (variable, value) => {
  const context = currentContext();
  context[variable] = value;
};

const unsetVariable = (variable) => {
  const context = currentContext();
  delete context[variable];
};

const numEqualTo = (value) => {
  const context = currentContext();
  return Object.values(context).filter((val) => val === value).length;
};

const getValue = (variable) => {
  const context = currentContext();
  return context[variable];
};

const beginTransaction = () => {
  const context = { ...currentContext() };
  stack.push(context);
};

const rollbackTransaction = () => {
  if (stack.length == 1) {
    return false;
  }
  return stack.pop();
};

const commitTransaction = () => {
  if (stack.length <= 1) {
    return false;
  }
  const context = stack.reduce(
    (contextA, contextB) => ({
      ...contextA,
      ...contextB,
    }),
    0
  );
  stack.length = 0;
  stack.push(context);
  return currentContext();
};

const clear = () => init();

module.exports = {
  setValue,
  getValue,
  unsetVariable,
  numEqualTo,
  clear,
  beginTransaction,
  rollbackTransaction,
  commitTransaction,
};
