const loadDepts = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDeptLoads = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('itemsData,: ', itemsData);
};

const errorFunction = function () {
  console.error('something happened');
};

const initializer = () => {
  loadDepts(whenDeptLoads, errorFunction);
  loadItems(whenItemsLoad, errorFunction);
};

module.exports = {
  initializer,
};
