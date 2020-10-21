# ValhallaJS
 Micro simple request API library

> This library allows you to send requests to any api using `POST` and `GET` methods.

```javascript
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
```
 If marked as `get('text')` the response will return in `TEXT` format, not in `JSON` format.
