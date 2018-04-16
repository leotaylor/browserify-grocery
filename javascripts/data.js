let departments = [];
let items = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
};
