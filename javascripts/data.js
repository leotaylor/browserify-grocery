let departments = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

module.exports = {
  getDepartments,
  setDepartments,
};
