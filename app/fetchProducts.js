var axios = require('axios');

export function fetchProducts(cb) {
  axios.get('https://reactjs102.herokuapp.com/products').then((res) => {
    cb(res);
  });
}
