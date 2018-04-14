const loadDepts = require('./departments');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDeptLoads = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
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
