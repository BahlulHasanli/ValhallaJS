import Valhalla from './Valhalla.js';

// [POST] method
Valhalla.url('https://jsonplaceholder.typicode.com/users')
  .post({
    name: 'Jett Madison',
    username: 'Madison',
    email: 'madison@gmail.com'
  })
  .then(res => console.log('POST Method', res));

// [GET] method
Valhalla.url('https://jsonplaceholder.typicode.com/users')
  .get()
  .then(res => console.log('GET Method', res));
