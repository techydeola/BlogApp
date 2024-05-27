const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const cookieParse = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// connect to database and listen to request
dbURI = 'mongodb+srv://johnsamxy:aderex27@sampledb.7mhnb7h.mongodb.net/BlogApp';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true })
  .then(() => {
    app.listen(3000, () => console.log('listening on port 3000'));
  })
  .catch(err => console.log(err));

// middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParse());

// routes
app.use('*', checkUser);
app.use(authRoutes);
app.use(blogRoutes);
app.get('/', (req, res) => res.redirect('/all-post'));
