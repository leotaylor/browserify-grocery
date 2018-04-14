const loadDepts = require('./departments');

const whenDeptLoads = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log('departments,', data);
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
