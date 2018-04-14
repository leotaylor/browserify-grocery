const loadDepts = require('./departments');
const printToDom = require('./dom');

const whenDeptLoads = function () {
  const data = JSON.parse(this.responseText).departments;
  printToDom(data);
};

const errorFunction = function () {
  console.error('something happened');
};

const initializer = () => {
  loadDepts(whenDeptLoads, errorFunction);
};

module.exports = {
  initializer,
};
