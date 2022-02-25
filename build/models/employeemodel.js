import { pool } from './pool';

class EmployeeModel {
  constructor(table) {
    this.table = table;
  }

  async selectEmployee(username, password) {
    try {
      var format = require('pg-format');

      var poolquery = pool.getPool();
      var sql = format('SELECT username, password FROM users.user_nodummie WHERE username = %L AND password = %L', [username], [password]);
      var result = poolquery.query(sql);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

}

export default EmployeeModel;