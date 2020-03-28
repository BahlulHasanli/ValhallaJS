# ValhallaJS
 Mikro sadə request api kitabxanası
 
> Bu kitabxana sizə, `POST` və `GET` metodları vasitəsi ilə hər hansı bir apiyə request göndərməyinizə imkan yaradır.

```javascript
import Valhalla from './Valhalla.js';

// [POST] metodu
Valhalla.url('https://jsonplaceholder.typicode.com/users')
  .post({
    name: 'Jett Madison',
    username: 'Madison',
    email: 'madison@gmail.com'
  })
  .then(res => console.log('POST Method', res));

// [GET] metodu
Valhalla.url('https://jsonplaceholder.typicode.com/users')
  .get()
  .then(res => console.log('GET Method', res));
```
 Əgər `get('text')` kimi qeyd edilərsə, response `JSON` formatında yox, `TEXT` formatında qayıdacaq.
