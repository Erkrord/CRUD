const app = require('./src/app');

const hostname = '212.86.115.63';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Полет Нормальный ', port);
});
