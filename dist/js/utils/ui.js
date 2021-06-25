import { select } from './selector.js';

const tableData = select('.product-body-table');

export const generateHTML = (productsData) => {
  console.log(productsData.length);
  if (productsData?.length === 0) {
    console.log('it works');
    // remove the table if data is empty
    select('table').remove();

    select('.primary h2').insertAdjacentHTML(
      'afterend',
      '<p class="add-some-data">Please add some data. Click <a href="add.html">here</a> to begin</p>'
    );
  } else {
    // displaying the data in the html
    const displayData = productsData.map(
      ({ itemName, category, numberInStock, description, price }) => {
        return `
        <tr>
          <td>${itemName}</td>
          <td>${category}</td>
          <td>${description}</td>
          <td>${numberInStock}</td>
          <td>$ ${price.toFixed(2)}</td>
          <td><i class="far fa-trash-alt"></i></td>
        </tr>
       `;
      }
    );

    tableData.innerHTML = displayData.join('');
  }
};
