import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res.status(403).send("All parameters is required");
  }
  
  const get_response = await loginFunction(username, password);

  if (get_response === 403) {
    return res.status(403).send("Username or Password did not found");
  }

  let response = {
    "data": await get_response
  };
  
  return res.send(response);
  // next();
}
