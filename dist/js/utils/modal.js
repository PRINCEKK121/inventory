import { select } from './selector.js';
import { closeProductModal, toggleBackdrop } from './modalOperations.js';

const startAddingProducts = select('#add-product');
const addProductModal = select('#add-modal');
const closeDialog = select('.btn--passive');

const showProductModal = () => {
  addProductModal.classList.add('visible');
  toggleBackdrop();
};

startAddingProducts.addEventListener('click', showProductModal);
closeDialog.addEventListener('click', closeProductModal);
