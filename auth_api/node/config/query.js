
export const get_credentials = (username) => `
    SELECT password, salt 
        FROM users 
    WHERE username="${username}";
`;
