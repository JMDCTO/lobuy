import { pool } from './pool';

class LogoModel {
  constructor(table) {
    this.table = table;
  }

  async selectBusinessLogo(officialname) {
    var format = require('pg-format');

    var poolquery = pool.getPool();
    var result = poolquery.query("SELECT official_name_business, encode(image, 'base64') FROM businesses.business_logo WHERE official_name_business = $1", [officialname]);
    return result;
  }

}

export default LogoModel;