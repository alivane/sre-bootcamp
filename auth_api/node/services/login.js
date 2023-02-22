import { getDataByUser, connection_db } from '../config/database';
import { getHashbySalt } from '../helpers/crypto'
import { getToken } from '../middleware/auth';

export const loginFunction = async (username, password) => {
  const user_data = await getDataByUser(connection_db, username);

  if (user_data === 403) return 403;

  try {
    const password_db =  await user_data[0].password;
    const salt_db =  await user_data[0].salt;
    const get_hash = await getHashbySalt(password, salt_db);

    let validate_user = get_hash === password_db;

    if (!validate_user) return 403;

    const token = getToken({ username: username });

    return `${token}`;

  } catch (err) { 
    return 403;
  }
}
