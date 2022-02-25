"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertUser = exports.dropUserTable = exports.createUserTable = void 0;
var createUserTable = "\nDROP TABLE IF EXISTS user_main_data;\nCREATE TABLE IF NOT EXISTS user_main_data (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR NOT NULL DEFAULT 'www.dummie.com',\n  password VARCHAR NOT NULL DEFAULT 'asdf',\n  alias VARCHAR NOT NULL DEFAULT 'dummie',\n  registration_time DATE NOT NULL DEFAULT '22-01-02',\n  premium BOOLEAN NOT NULL DEFAULT 'false'\n  )\n  ";
exports.createUserTable = createUserTable;
var insertUser = "\nINSERT INTO user_main_data(email, password, alias, registration_time, premium)\nVALUES ('api@yahoo.com', '123456', 'apidummie', '2022-01-02', true)\n";
exports.insertUser = insertUser;
var dropUserTable = 'DROP TABLE user_main_data';
exports.dropUserTable = dropUserTable;