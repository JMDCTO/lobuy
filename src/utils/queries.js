export const createUserTable = `
DROP TABLE IF EXISTS user_main_data;
CREATE TABLE IF NOT EXISTS user_main_data (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL DEFAULT 'www.dummie.com',
  password VARCHAR NOT NULL DEFAULT 'asdf',
  alias VARCHAR NOT NULL DEFAULT 'dummie',
  registration_time DATE NOT NULL DEFAULT '22-01-02',
  premium BOOLEAN NOT NULL DEFAULT 'false'
  )
  `;

export const insertUser = `
INSERT INTO user_main_data(email, password, alias, registration_time, premium)
VALUES ('api@yahoo.com', '123456', 'apidummie', '2022-01-02', true)
`;

export const dropUserTable = 'DROP TABLE user_main_data';
