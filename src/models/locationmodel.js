import {pool} from './pool';

class LocationModel {
  constructor(table) {
    this.table = table;
  }

  async insertLocation(id, longitude, latitude, city) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('INSERT INTO users.user_location_data (id, longitude, latitude, city) VALUES (%L, %L, %L, %L)', [id], [longitude], [latitude], [city]);
    var result = poolquery.query(sql);
    return result;
  }

  async updateLocation(id, longitude, latitude, city) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('UPDATE users.user_location_data SET longitude = %L, latitude = %L, city = %L WHERE id = %L', [longitude], [latitude], [city], [id]);
    var result = poolquery.query(sql);
    return result;
  }

  async getLastLocation(id) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT COUNT(*) FROM users.user_location_data WHERE id = %L', [id]);
    var result = poolquery.query(sql);
    return result;
  }
  
}
export default LocationModel;
