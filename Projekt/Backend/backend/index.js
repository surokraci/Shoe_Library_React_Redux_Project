const express = require('express');
const app = express();
const shoes = require('./routes/shoes')
const colorways = require('./routes/colorways');
const sellers = require('./routes/sellers');
const auctions = require('./routes/auctions');
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/shoes', shoes);
app.use('/colorways', colorways);
app.use('/sellers', sellers);
app.use('/auctions', auctions)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


require('dotenv').config();
const dbConnData = {
    host: process.env.MONGO_HOST || '127.0.0.1',
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || 'local'
};

const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = process.env.PORT || 4000
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB', error));
