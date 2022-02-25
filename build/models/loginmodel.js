import { pool } from './pool';

class LoginModel {
  constructor(table) {
    this.table = table;
  }

  async insertLoginInfo(id, email, login, lastlogindate) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('INSERT INTO users.user_login_data (id, email, login, date, time) VALUES (%L, %L, %L::boolean, %L, CURRENT_TIME(2))', [id], [email], [login], [lastlogindate]);
    var result = poolquery.query(sql);
    return result;
  }

  async updateLoginInfo(id, email, login, lastlogindate) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('UPDATE users.user_login_data SET id = %L, email = %L, time = CURRENT_TIME(2), date = %L, login = %L  WHERE id = %L', [id], [email], [lastlogindate], [login], [id]);
    var result = poolquery.query(sql);
    return result;
  }

  async getLastLogin(email) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('SELECT COUNT(*) FROM users.user_login_data WHERE email = %L', [email]);
    var result = poolquery.query(sql);
    return result;
  }

  async logoutUser(id, login, logoutdate) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('UPDATE users.user_login_data SET time = CURRENT_TIME(2), date = %L, login = %L  WHERE id = %L', [logoutdate], [login], [id]);
    var result = poolquery.query(sql);
    return result;
  }

}

export default LoginModel;