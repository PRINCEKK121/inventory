import './sidebar-toggle.js';
import { select } from './selector.js';

const overlay = select('#backdrop');
const startAddingProducts = select('#add-product');
const addProductModal = select('#add-modal');
const closeDialog = select('.btn--passive');

const closeProductModal = () => {
  addProductModal.classList.remove('visible');
  toggleBackdrop();
};

const toggleBackdrop = () => {
  overlay.classList.toggle('visible');
};

const showMovieModal = () => {
  addProductModal.classList.add('visible');
  toggleBackdrop();
};

startAddingProducts.addEventListener('click', showMovieModal);
closeDialog.addEventListener('click',closeProductModal);