import {pool} from './pool';

class NoDummieBusinessModel {
  constructor(table) {
    this.table = table;
  }

  async insertBusiness(officialname, alias, street, number, postal, city, lat, long) {
    try {
      var format = require('pg-format');
      var poolquery = pool.getPool();
      var sql = format('INSERT INTO businesses.business_main_data (official_name, alias, street, house_number, postal, city, latitude, longitude) VALUES (%L, %L, %L, %L, %L, %L, %L, %L)', [officialname], [alias], [street], [number], [postal], [city], [lat], [long]);
      var result = poolquery.query(sql);
      return result;
    }
    catch(err) {
      console.log(err);
    }
  }

  async getBusinessesHome(city) {
    try {
      var format = require('pg-format');
      var poolquery = pool.getPool();
      var sql = format('SELECT id, official_name, alias, street, house_number, postal, latitude, longitude FROM businesses.business_main_data WHERE city = %L', [city]);
      var result = poolquery.query(sql);
      return result;
    }
    catch(err) {
      console.log(err);
    }
  }

  async getBusinessesByName(name) {
    try {
      var format = require('pg-format');
      var poolquery = pool.getPool();
      var sql = format('SELECT id, official_name, alias, street, house_number, postal, latitude, longitude FROM businesses.business_main_data WHERE alias = %L', [name]);
      var result = poolquery.query(sql);
      return result;
    }
    catch(err) {
      console.log(err);
    }
  }
}
export default NoDummieBusinessModel;
