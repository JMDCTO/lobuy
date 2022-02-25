import { pool } from './pool';

class NoDummieLoginModel {
  constructor(table) {
    this.table = table;
  }

  async getLoginInfo(id) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT * FROM users.user_login_data WHERE id = %L', [id]);
    var result = poolquery.query(sql);
    return result;
  }
}
export default NoDummieLoginModel;
