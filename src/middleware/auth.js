require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

function auth(req, res, next) {
  // const token = req.header('Authorization');
  // console.log(token)
  const authorizationHeader = req.headers.authorization;

  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.split(' ')[1];
    console.log(token);
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: 'Invalid token, authorization denied' });
      }
      req.user = decoded;
      next();
    });
  } else {
    res
      .status(401)
      .json({ message: 'No token provided, authorization denied' });
  }
}

module.exports = auth;
