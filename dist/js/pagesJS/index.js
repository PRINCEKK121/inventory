import './../app.js';
import Product from '../Product.js';
import { select } from './../utils/selector.js';

const productsData = JSON.parse(localStorage.getItem('products'));
const categoriesCount = [];
let totalItems = 0;
let totalPrice = 0;

productsData.forEach(({ category }) => {
  if (!categoriesCount.includes(category)) categoriesCount.push(category);
});

productsData.forEach(({numberInStock}) => {
  totalItems += Number(numberInStock);
});

productsData.forEach(({ numberInStock, price }) => {
  totalPrice += Number(numberInStock) * Number(price);
});

select('.total-categories p').textContent = categoriesCount.length;
select('.total-items p').textContent = totalItems;
select('.total-price p').textContent = new Product(
  null,
  null,
  null,
  totalPrice
).formatPrice();
