import './utils/sidebar-toggle.js';
import { generateHTML } from './utils/ui.js';

const products = JSON.parse(localStorage.getItem('products'));

document.addEventListener('DOMContentLoaded', () => {
  // const data = initializer('./js/products.json');
  try {
    
    generateHTML(products);
  } catch (e) {
    console.log('Error', e)
  }
});
 

