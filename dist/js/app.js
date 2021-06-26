import './utils/sidebar-toggle.js';
import { generateHTML } from './utils/ui.js';

let products = localStorage.getItem('products');

document.addEventListener('DOMContentLoaded', () => {
  if (!products) {
    products = [];
    localStorage.setItem('products', JSON.stringify(products));
  }

  generateHTML(JSON.parse(localStorage.getItem('products')));
});
