const jwt = require('jsonwebtoken');
if (process.env.NODE !== 'PRODUCTION') {
  require('dotenv').config({
    path: './configurations/.env',
  });
}

const verifyUser = (req, res, next) => {
  const { token } = req.query;
  console.log(req.query);
  if (!token) {
    return res.status(404).send({ message: 'Send token over request' });
  }

  const data = jwt.verify(token, process.env.SECRET_KEY);
  console.log(data);
  req.userEmailAddress = data.email;
  req.UserId = data.id;
  
  next();
};

module.exports = verifyUser;