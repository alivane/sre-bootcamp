const crypto = require('crypto');

export const getHashbySalt = function(password, salt) {
  const hash = crypto.createHash('sha512');
  const data = hash.update(`${password}${salt}`, 'utf-8');
  const gen_hash = data.digest('hex');
  
  return gen_hash;
};
