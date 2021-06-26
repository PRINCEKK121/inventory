import { select } from './selector.js';
import { formatPrice } from './formatPrice.js';

const tableData = select('.product-body-table');

export const generateHTML = (productsData) => {
  if (productsData?.length === 0) {
    // remove the table if data is empty
    select('table').remove();

    select('.primary h2').insertAdjacentHTML(
      'afterend',
      '<p class="add-some-data">Please add some data. Click <a href="add.html">here</a> to begin</p>'
    );
  } else {
    // displaying the data in the html
    const displayData = productsData.map(
      ({ itemName, category, numberInStock, desc, price }) => {
        return `
        <tr>
          <td>${itemName}</td>
          <td>${category}</td>
          <td>${desc}</td>
          <td>${numberInStock}</td>
          <td>${formatPrice(price)}</td>
          <td><i class="far fa-trash-alt"></i></td>
        </tr>
       `;
      }
    );

    tableData.innerHTML = displayData.join('');
  }
};
