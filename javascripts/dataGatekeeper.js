const loadDepts = require('./departments');
const departmentDom = require('./departmentDom');

const whenDeptLoads = function () {
  const data = JSON.parse(this.responseText).departments;
  departmentDom(data);
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
