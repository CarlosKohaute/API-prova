const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas CONNECTED!!'))
    .catch((err) => console.log(`Error to connect with MongoDB! erro ${err}`));
};

module.exports = connectToDatabase;
