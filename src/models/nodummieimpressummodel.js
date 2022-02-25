import { pool } from './pool';

class NoDummieImpressumModel {
  constructor(table) {
    this.table = table;
  }

  async insertBusinessImpressum(officialname, officialbusiness, email, street, number, postal, city) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('INSERT INTO businesses.business_impressum (business_name, official_contact, email, street, housenumber, postal, city) VALUES (%L, %L, %L, %L, %L, %L, %L)', [officialbusiness], [officialname], [email], [street], [number], [postal], [city]);
    var result = poolquery.query(sql);
    return result;
  }

  async getBusinessImpressum(officialbusiness) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT * FROM businesses.business_impressum WHERE business_name = %L', [officialbusiness]);
    var result = poolquery.query(sql);
    return result;
  }

}
export default NoDummieImpressumModel;
