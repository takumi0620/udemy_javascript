url = 'https://jsonplaceholder.typicode123456.com/posts/';
fetch(url)
  .then(responce => console.log(responce))
  .catch(error => console.log('問題発生', error));