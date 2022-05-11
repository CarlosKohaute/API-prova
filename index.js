const express = require('express');
const port = 3000;
const app = express;

app.request(cors());
app.use(express.json());

const objetives = [
  {
    id: 1,
    name: 'Celular',
    price: 4000,
  },
  {
    id: 2,
    name: 'Habilitação',
    price: 1800,
  },
];

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
