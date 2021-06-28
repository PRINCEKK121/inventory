/********************************
 * Imports
 ********************************/
import './../utils/sidebar-toggle.js';
import './../utils/modal.js';

import Product from '../Product.js';
import { select } from '../utils/selector.js';
import {closeProductModal, toggleBackdrop} from '../utils/modalOperations.js';

/***************************************
 * Functions
 ***************************************/
const clearInputFields = () => {
  select('#product-name').value = '';
  select('#category').value = '';
  select('#number-in-stock').value = '';
  select('#product-price').value = '';
  select('#description').value = '';
  closeProductModal();
  toggleBackdrop();
}

const showProductModal = () => {
  select('#add-modal').classList.add('visible');
  toggleBackdrop();
};


const startAddingProducts = select('#add-product');

/***************************************
 * Event Handlers
 ***************************************/
select('.btn--success').addEventListener('click', () => {
  const newProduct = new Product(
    select('#product-name').value,
    select('#category').value,
    select('#number-in-stock').value,
    select('#product-price').value,
    select('#description').value
  );

  if (newProduct.isValidInputs()) {
    const productsData = JSON.parse(localStorage.getItem('products'));
    newProduct.id = productsData.length + 1;
    productsData.push(newProduct);
    localStorage.setItem('products', JSON.stringify(productsData));

    closeProductModal();
    toggleBackdrop();
    clearInputFields();
    alert('Product added successfully');

    // redirecting the user to index.html
    location.assign('index.html');
  }
});

startAddingProducts.addEventListener('click', showProductModal);
select('.btn--passive').addEventListener('click', clearInputFields);

