let express = require('express');
let app = express();
let path = require('path');

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '../static/')));

app.listen(3001, () => {
  console.log('app listening on 3001');
});
