import { pool } from './pool';

class CategoryModel {
  constructor(table) {
    this.table = table;
  }

  async insertCategory(title, description, logo) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var result = poolquery.query("INSERT INTO products.product_category (title, description, logo) VALUES ($1, $2, decode($3, 'base64'))", [title, description, logo]);
    return result;
  }

  async getCategory(title) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('SELECT title, description, logo FROM products.product_category WHERE title = %L', [title]);
    var result = poolquery.query(sql);
    return result;
  }

  async getAllCategories() {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var result = poolquery.query("SELECT id, title, description, encode(logo, 'base64') FROM products.product_category");
    return result;
  }

  async updateCategory(id, title, description, logo) {
    var format = require('pg-format');
    var poolquery = pool.getPool();
    var sql = format('UPDATE products.product_category SET title = %L, description = %L, logo = %L WHERE id = %L', [title], [description], [logo], [id]);
    var result = poolquery.query(sql);
    return result;
  }
}
export default CategoryModel;
