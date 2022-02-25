import {pool}  from './pool';

class NoDummieLocationModel {
  constructor(table) {
    this.table = table;
  }

  async getLocation(id) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT * FROM users.user_location_data WHERE id = %L', [id]);
    var result = poolquery.query(sql);
    return result;
    }
}
export default NoDummieLocationModel;
