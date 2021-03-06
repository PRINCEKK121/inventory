/******************************
 * IMPORTS
 *******************************/
import './../utils/modal.js';
import './../utils/sidebar-toggle.js';
import './../app.js';

import { generateHTML } from './../utils/ui.js';
import { select } from './../utils/selector.js';
import {
  closeProductModal,
  toggleBackdrop,
} from './../utils/modalOperations.js';

/*********************************
 * FUNCTIONS
 ***********************************/
const showProductModal = () => {
  select('#add-modal').classList.add('visible');
  select('#add-quantity').value = '';
  toggleBackdrop();
};

const clearInputField = () => {
  select('#add-quantity').value = '';
  select('#add-quantity').focus();
};

/***************************
 * Variables
 ***************************/
const productsData = JSON.parse(localStorage.getItem('products'));
let productID, index;

/*****************************
 * EVENT LISTENERS
 *****************************/

if (productsData?.length) { 
  select('.product-body-table').addEventListener('click', (e) => {
    if (e.target.classList.contains('action')) {
      showProductModal();
      
      productID = Number(e.target.dataset.id);
      index = productsData.findIndex(({ id }) => id === productID);
  
      select('#in-stock').value = productsData[index].numberInStock;
    }
  });
}

select('.btn--success').addEventListener('click', () => {
  const qtyAdded = Number(select('#add-quantity').value);

  if (isNaN(qtyAdded) || qtyAdded === 0) {
    alert('Please input accept only numbers greater than zero');
    clearInputField();
    return;
  }

  if (qtyAdded < 1) {
    alert('Number input should be greater than zero');
    clearInputField();
    return;
  }

  productsData[index].numberInStock =
    Number(productsData[index].numberInStock) + qtyAdded;

  localStorage.setItem('products', JSON.stringify(productsData));
  alert('Product updated successfully');
  closeProductModal();
  generateHTML(productsData);
});

select('.btn--passive').addEventListener('click', closeProductModal);
