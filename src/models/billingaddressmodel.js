import {pool} from './pool';

class BillingAddressModel {
  constructor(table) {
    this.table = table;
}

  async getAddressCount(id) {
    try {
      var format = require('pg-format');
      var poolquery = pool.getPool();
      var sql = format('SELECT COUNT(*) FROM users.user_billing_address WHERE id = %L', [id]);
      var result = poolquery.query(sql);
      return result;
    }
    catch(err) {
      console.log(err)
    }
  }

  async getAddressIntern(id) {
    try {
      var format = require('pg-format');
      var poolquery = pool.getPool();
      var sql = format('SELECT * FROM users.user_billing_address WHERE id = %L', [id]);
      var result = poolquery.query(sql);
      return result;
    }
    catch(err) {
      console.log(err)
    }
  }

  async setAddress(id, street, number, postalcode, city) {
    try {
      var format = require('pg-format');
      var poolquery = pool.getPool();
      var sql = format('INSERT INTO users.user_billing_address (id, streetname, housenumber, postalcode, city) VALUES (%L, %L, %L, %L, %L)', [id], [street], [number], [postalcode], [city]);
      var result = poolquery.query(sql);
      return result;
    }
    catch(err) {
      console.log(err)
    }
  }

  async updateAddress(id, street, number, postalcode, city) {
    try {
      var format = require('pg-format');
      var poolquery = pool.getPool();
      var sql = format('UPDATE users.user_billing_address SET streetname = %L, housenumber = %L, postalcode = %L, city = %L WHERE id = %L', [street], [number], [postalcode], [city], [id]);
      var result = poolquery.query(sql);
      return result;
    }
    catch(err) {
      console.log(err)
    }
  }
}
export default BillingAddressModel;
