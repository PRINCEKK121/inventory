import { select } from './selector.js';

const overlay = select('#backdrop');
const addProductModal = select('#add-modal');

export const closeProductModal = () => {
  addProductModal.classList.remove('visible');
  toggleBackdrop();
};

export const toggleBackdrop = () => overlay.classList.toggle('visible');