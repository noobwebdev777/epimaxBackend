const express = require('express');

const auth = require('middleware/auth');

const app = express();

const port = 3000;

// app.use(auth);

//api endpoint to register a user sending username and password in a json format

app.get('/', auth, (req, res) => {
  try {
    console.log('request recived at get-""/"');
    res.status(200).json([{}]);
  } catch (e) {
    console.log(e);
    res.status(500).json([{ message: 'dont know what error is this' }]);
  }
});

app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});
