import { verifyToken } from '../middleware/auth';

export const protectFunction = async (authorization) => {
  try {
    const token = authorization.split('Bearer ')[1];
    const validate = await verifyToken(token);
  
    return validate;
  } catch (err) {
    return 403
  }
}
