const express = require('express');
require('dotenv').config();

// const database = require('../database/database')

const auth = require('../middleware/auth');

const app = express();

const port = process.env.PORT || 3000;

// app.use(auth);

app.use(express.json());

//api endpoint to register a user sending username and password in a json format

// app.get('/', auth, (req, res) => {
//   try {
//     console.log('request recived at get-""/"');
//     res.status(200).json('');
//   } catch (e) {
//     console.log(e);
//     res.status(500).json([{ message: 'dont know what error is this' }]);
//   }
// });

//signup api endpoint receiving json object with username and password
//ex: {
//   username: 'rahul',
//   password: 'rahul@123456'
// }

app.post('/signup', (req, res) => {
  console.log('signup received');

  try {
    const userinfo = req.body

    const username = userinfo.username;

    const password = userinfo.password;

    
    res.status(200).json({ message: 'username and password received lol :)' });
  } catch (error) {
    res.status(400).json({ message: 'Username and password are required' });
  }
});

app.post('/login', auth ,(req, res) => {
  
})

app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});
