function Product(itemName, category, numberInStock, price, desc) {
  this.itemName = itemName;
  this.category = category;
  this.numberInStock = numberInStock;
  this.price = price;
  this.desc = desc;
}

Product.prototype.isValidInputs = function () {
  const numInStock = Number(this.numberInStock),
    price = Number(this.price);

  if (this.itemName === '') {
    alert('Please enter a product name');
    return false;
  }

  if (this.category === '') {
    alert('Please choose a category');
    return false;
  }

  if (isNaN(numInStock)) {
    alert('Please enter a valid number');
    return false;
  } else if (numInStock < 0) {
    alert('Please enter a number greater than or equal to 0');
    return false;
  }

  if (isNaN(price)) {
    alert('Please enter a valid number');
    return false;
  } else if (price < 1) {
    alert('Price cannot be negative or zero!');
    return false;
  }

  if (this.desc === '') {
    alert('Please add a description!');
    return false;
  }

  return true;
};

Product.prototype.formatPrice = function() {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(this.price);
};

Product.prototype.status = function() {
  const stock = Number(this.numberInStock);
  let status = '';

  if (stock === 0) status = 'indicate-out-of-stock';
  else if (stock >= 1 && stock <= 20)
    status = 'indicate-almost-out-of-stock';
  else status = 'indicate-in-stock';

  return status;
}

export default Product;
