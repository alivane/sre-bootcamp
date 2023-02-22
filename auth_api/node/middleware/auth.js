import Config from 'config';
const jwt = require("jsonwebtoken");

let config = Config;

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, config.TOKEN_KEY);
  return decoded;
};

export const getToken = (data) => {
  const token = jwt.sign(
    data,
    config.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
  
  return token;
}