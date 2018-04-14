const outputDiv = document.getElementById('departments');

const domString = (departments) => {
  let strang = '';
  departments.forEach((department) => {
    strang +=   `<div class='col-md-3 department'>`;
    strang +=      `<img class='department-image' src='${department.img}'>`;
    strang +=      `<h3 class='hide'>${department.name}</h3>`;
    strang +=   `</div>`;
  });
  return strang;
};

const printToDom = (deptArray) => {
  outputDiv.innerHTML = domString(deptArray);
};

module.exports = printToDom;
