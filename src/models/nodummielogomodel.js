import { pool } from './pool';

class NoDummieLogoModel {
  constructor(table) {
    this.table = table;
  }

  async insertBusinessLogo(officialname, image) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    //var sql = format('INSERT INTO businesses.business_logo (official_name_business, image) VALUES (%L, %L)', [officialname], [image]);
    var result = poolquery.query("INSERT INTO businesses.business_logo (official_name_business, image) VALUES ($1, decode($2, 'base64'))", [officialname, image]);
    return result;
  }
}
export default NoDummieLogoModel;
