const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// connect to database and start listening to request
dbURI = 'mongodb+srv://johnsamxy:aderex27@sampledb.7mhnb7h.mongodb.net/BlogApp';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true })
  .then(() => {
    app.listen(3000, () => console.log('listening on port 3000'));
  })
  .catch(err => console.log(err));

// middleware
app.use(express.json());

// home endpoint
app.get('/', (req, res) => {
  res.send('This is home');
})

// authentication routes endpoint
app.use(authRoutes);
