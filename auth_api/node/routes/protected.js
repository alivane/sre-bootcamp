import { protectFunction } from '../services/protected';

export const protect = async (req, res) => {
  let authorization = req.headers.authorization;

  if (!authorization) return res.status(403).send("Autherization is required");

  const responseToken = await protectFunction(authorization);

  if (responseToken === 403) return res.status(403).send("Invalid Token");
  
  const response = {
    "data": "You are under protected data"
  };
  
  return res.send(response);
}
