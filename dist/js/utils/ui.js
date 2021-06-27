import { select } from './selector.js';
import Product from '../Product.js';

export const generateHTML = (productsData) => {
  if (productsData?.length === 0) {
    // remove the table if data is empty
    // console.log(productsData);
    select('table').remove();

    select('.primary h2').insertAdjacentHTML(
      'afterend',
      '<p class="add-some-data">Please add some data. Click <a href="add.html">here</a> to begin</p>'
    );
  } else {
    // displaying the data in the html
    const displayData = productsData.map(
      ({ id, itemName, category, numberInStock, desc, price }) => {
        const product = new Product(null, null, numberInStock, price, null);
        /****************************
         * Index page
         ****************************/
        if (location.href.includes('index')) {
          return `
          <tr>
            <td>${itemName}</td>
            <td>${category}</td>
            <td>${desc}</td>
            <td>${numberInStock}</td>
            <td>${product.formatPrice()}</td>
            <td class="status"><span class='${product.status()}'></span></td>
          </tr>
        `;
        }

        /**************************
         * Update Stock page
         **************************/

        if (location.href.includes('update')) {
          return `
          <tr>
            <td>${itemName}</td>
            <td>${category}</td>
            <td>${numberInStock}</td>
            <td><button data-id="${id}" class="action">Edit stock</button></td>
          </tr>
        `;
        }
      }
    );

    select('.product-body-table').innerHTML = displayData.join('');
  }
};
