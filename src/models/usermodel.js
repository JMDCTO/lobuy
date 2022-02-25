import {pool} from './pool';

class UserModel {
  constructor(table) {
    this.table = table;
  }

  async selectLogin(columns, email, password) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT id, email, password, alias FROM users.user_main_data WHERE email = %L AND password = %L', [email], [password]);
    var result = poolquery.query(sql);
    return result;
  }

  async validate(email) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT email FROM users.user_main_data WHERE email = %L', [email]);
    var result = poolquery.query(sql);
    return result;
  }

  async insertUser(email, password, alias, date, premium) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('INSERT INTO users.user_main_data (email, password, alias, date, premium) VALUES (%L, %L, %L, %L, %L::boolean)', [email], [password], [alias], [date], [premium]);
    var result = poolquery.query(sql);
    return result;
  }

  async getUserIdIntern(email, password) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT id FROM users.user_main_data WHERE email = %L AND password = %L', [email], [password]);
    var result = poolquery.query(sql);
    return result;
  }

  async getAllCredentials(id) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT email, password, alias, date FROM users.user_main_data WHERE id = %L', [id]);
    var result = poolquery.query(sql);
    return result;
  }
}
export default UserModel;
