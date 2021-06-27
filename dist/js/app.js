import './utils/sidebar-toggle.js';
import { generateHTML } from './utils/ui.js';

let products = localStorage.getItem('products') || [];

document.addEventListener('DOMContentLoaded', () => {
  if (!products.length) {
    localStorage.setItem('products', JSON.stringify(products));
    products = localStorage.getItem('products');
  }

  generateHTML(JSON.parse(products));
});
