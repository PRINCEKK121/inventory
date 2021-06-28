/*********************
 * IMPORTS
 *********************/
import './../app.js';

import { select } from './../utils/selector.js';
import { generateHTML } from './../utils/ui.js';
import Product from './../Product.js';
import {
  closeProductModal,
  toggleBackdrop,
} from './../utils/modalOperations.js';

/***********************
 * FUNCTIONS
 ***********************/
const showProductModal = () => {
  select('#add-modal').classList.add('visible');
  toggleBackdrop();
};

const productsData = JSON.parse(localStorage.getItem('products'));
let productID;

const updateQty = select('#update-quantity');
const updateProductName = select('#update-product-name');
const updateCategory = select('#update-category');
const updateProductPrice = select('#update-product-price');
const updateDesc = select('#update-description');

/****************************
 * EVENT LISTENERS
 ****************************/
if (productsData?.length) {
  select('.product-body-table').addEventListener('click', (e) => {
    if (e.target.classList.contains('action')) {
      showProductModal();

      productID = Number(e.target.dataset.id);
      const { itemName, price, category, numberInStock, desc } =
        productsData.find(({ id }) => id === productID);

      updateProductName.value = itemName;
      updateCategory.value = category;
      updateProductPrice.value = price;
      updateQty.value = numberInStock;
      updateDesc.value = desc;

      updateProductName.focus();
    }
  });
}

select('.btn--success').addEventListener('click', (e) => {
  const updateProduct = new Product(
    updateProductName.value,
    updateCategory.value,
    updateQty.value,
    updateProductPrice.value,
    updateDesc.value
  );

  if (updateProduct.isValidInputs()) {
    //
    const selectedProduct = productsData.find(({ id }) => id === productID);

    selectedProduct.itemName = updateProductName.value;
    selectedProduct.category = updateCategory.value;
    selectedProduct.numberInStock = updateQty.value;
    selectedProduct.price = updateProductPrice.value;
    selectedProduct.desc = updateDesc.value;

    // closing the modal
    closeProductModal();
    localStorage.setItem('products', JSON.stringify(productsData));
    alert('Product updated successfully');
    generateHTML(productsData);
  }
});

select('.btn--passive').addEventListener('click', closeProductModal);
