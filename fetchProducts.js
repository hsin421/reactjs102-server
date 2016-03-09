var axios = require('axios');

function fetchProducts(cb) {
  axios.get('https://reactjs102.herokuapp.com/products').then((res) => {
    cb(res);
  });
}

module.exports = fetchProducts;
