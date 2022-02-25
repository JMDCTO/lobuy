import { pool } from './pool';

class NodummieUserModel {
  constructor(table) {
    this.table = table;
  }

  async selectUserWithAliasAndDate(alias, date) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('SELECT * FROM users.user_main_data WHERE alias = %L AND date = %L', [alias], [date]);
    var result = poolquery.query(sql);
    return result;
  }

  async selectUserWithEmailAndDate(email, date) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('SELECT * FROM users.user_main_data WHERE email = %L AND date = %L', [email], [date]);
    var result = poolquery.query(sql);
    return result;
  }

  async selectUserWithEmail(email) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('SELECT * FROM users.user_main_data WHERE email = %L', [email]);
    var result = poolquery.query(sql);
    return result;
  }

  async selectUserWithAlias(alias) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('SELECT * FROM users.user_main_data WHERE alias = %L', [alias]);
    var result = poolquery.query(sql);
    return result;
  }

  async getUserCount() {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var sql = format('SELECT COUNT(*) FROM users.user_main_data');
    var result = poolquery.query(sql);
    return result;
  }

}

export default NodummieUserModel;