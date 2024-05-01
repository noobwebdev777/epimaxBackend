const express = require('express');
const app = express();

require('dotenv').config();

// const database = require('../database/database')

const auth = require('../middleware/auth');

const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

app.use(express.json());

//signup api endpoint receiving json object with username and password
//ex: {
//   username: 'rahul',
//   password: 'rahul@123456'
// }

app.post('/signup', (req, res) => {
  console.log('signup received');

  try {
    const userinfo = req.body;

    const username = userinfo.username;

    const password = userinfo.password;

    if (username === '' || password === '') {
      res.status(400).json({ message: 'username and password is required' });
    } else {
      const payload = { username: username, password: password };

      const secretKey = process.env.SECRET_KEY;

      const auth0 = jwt.sign(payload, secretKey);

      console.log(auth0);

      res.status(200).json({ message: 'User registered successfully', Authorization: `${auth0}` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/tasks', auth, (req, res) => {
  console.log('tasks tab')
});

app.get('/tasks', auth, (req, res) => {

})

app.get('tasks/:id', auth, () => {

})


//server running at port given in .env file (default is 3000)
app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});
