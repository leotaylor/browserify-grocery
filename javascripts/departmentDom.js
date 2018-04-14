const events = require('./event');
const outputDiv = document.getElementById('departments');

const domString = (departments) => {
  let strang = '';
  departments.forEach((department) => {
    strang +=   `<div class='col-md-3 department'>`;
    strang +=      `<h3 class='hide department-title' data-department-id='${department.id}'>${department.name}</h3>`;
    strang +=      `<img class='department-image' src='${department.img}'>`;
    strang +=   `</div>`;
  });
  return strang;
};

const printDepartmentToDom = (deptArray) => {
  outputDiv.innerHTML = domString(deptArray);
  events.addDepartmentEvents();
};

module.exports = printDepartmentToDom;
