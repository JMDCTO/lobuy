import { pool } from './pool';

class TagModel {
  constructor(table) {
    this.table = table;
  }

  async insertTag(title, description, logo, categoryid) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var result = poolquery.query("INSERT INTO products.product_tag (title, description, logo, category_ref) VALUES ($1, $2, decode($3, 'base64'), $4)", [title, description, logo, categoryid]);
    return result;
  }

  async getTag(title) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT title, description, logo, category_ref FROM products.product_tag WHERE title = %L', [title]);
    var result = poolquery.query(sql);
    return result;
  }

  async getAllTags() {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var result = poolquery.query("SELECT id, title, description, encode(logo, 'base64'), category_ref FROM products.product_tag");
    return result;
  }

  async updateTag(id, title, description, logo, categoryid) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('UPDATE products.product_tag SET title = %L, description = %L, logo = %L WHERE id = %L', [title], [description], [logo], [id]);
    var result = poolquery.query(sql);
    return result;
  }
}
export default TagModel;
