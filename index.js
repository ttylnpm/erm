const e = require('express')();

e.get('/', (res) => res.send('hi'));

e.listen(3000);
