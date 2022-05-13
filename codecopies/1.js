const API_URL = 'https://0p2heigvnl.execute-api.ap-northeast-2.amazonaws.com/prod/products';

function get() {

  fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

/* {
    resource: '/products',
    path: '/products',
    httpMethod: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }
*/