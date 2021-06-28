/**************************
 * IMPORTS
 **************************/
import './../app.js';

import { select } from './../utils/selector.js';
import { generateHTML } from './../utils/ui.js';

const productsData = JSON.parse(localStorage.getItem('products'));

// EVENT LISTENER
if (productsData?.length) {
  select('.product-body-table').addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete this product?')) {
        // find the index of the clicked product
        const index = productsData.findIndex(
          ({ id }) => id === Number(target.dataset.id)
        );

        // deleting the index
        productsData.splice(index, 1);

        // updating products data in local storage
        localStorage.setItem('products', JSON.stringify(productsData));
        alert('Product deleted successfully');
        generateHTML(productsData);
      }
    }
  });
}
