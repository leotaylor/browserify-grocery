const data = require('./data');
const cartOutputDiv = document.getElementById('cart');

const cartDomString = (items) => {
  let domString = '<h3 class="text-center">Your Cart</h3>';
  domString += `<div class="col-xs-8 col-xs-offset-2">`;
  domString += `<table class="table table-striped">`;
  domString +=   `<tr>`;
  domString +=     `<th>Name</th>`;
  domString +=     `<th>Price</th>`;
  domString +=     `<th>Quantity</th>`;
  domString +=     `<th></th>`;
  domString +=   `</tr>`;
  items.forEach((item) => {
    domString +=   `<tr>`;
    domString +=     `<td>${item.name}</td>`;
    domString +=     `<td>$${item.price.toFixed(2)}</td>`;
    domString +=     `<td>${item.purchaseNum}</td>`;
    domString +=     `<td><button class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button></td>`;
    domString +=   `</tr>`;
  });
  domString += `</table>`;
  domString += getTotals(items);
  domString += `</div>`;
  return domString;
};

const getTotals = (items) => {
  let itemTotal = 0;
  let priceTotal = 0;
  items.forEach((item) => {
    itemTotal += (item.purchaseNum * 1);
    priceTotal += (item.purchaseNum * item.price);
  });
  return totalsString(itemTotal, priceTotal);
};

const printCartToDom = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cartDomString(cartItems);
};

const totalsString = (itemNum, total) => {
  let domString = '';
  domString += `<h4>Total Number of Items: ${itemNum}</h4>`;
  domString += `<h4>Total Price: $${total.toFixed(2)}</h4>`;
  return domString;
};

module.exports = printCartToDom;
