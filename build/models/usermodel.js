"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _pool = require("./pool");

var UserModel = /*#__PURE__*/function () {
  function UserModel(table) {
    (0, _classCallCheck2["default"])(this, UserModel);
    this.pool = _pool.pool;
    this.table = table;
    this.pool.on('error', function (err, client) {
      return "Error, ".concat(err, ", on idle client").concat(client);
    });
  }

  (0, _createClass2["default"])(UserModel, [{
    key: "selectLogin",
    value: function () {
      var _selectLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(columns, email, password) {
        var format, sql;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                format = require('pg-format');
                sql = format('SELECT id, email, password FROM user_main_data WHERE email = %L AND password = %L', [email], [password]);
                return _context.abrupt("return", this.pool.query(sql));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function selectLogin(_x, _x2, _x3) {
        return _selectLogin.apply(this, arguments);
      }

      return selectLogin;
    }()
  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
        var format, sql;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                format = require('pg-format');
                sql = format('SELECT email FROM user_main_data WHERE email = %L', [email]);
                return _context2.abrupt("return", this.pool.query(sql));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function validate(_x4) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "insertUser",
    value: function () {
      var _insertUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email, password, alias, date, premium) {
        var format, sql;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                format = require('pg-format');
                sql = format('INSERT INTO user_main_data (email, password, alias, date, premium) VALUES (%L, %L, %L, %L, %L::boolean)', [email], [password], [alias], [date], [premium]);
                return _context3.abrupt("return", this.pool.query(sql));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function insertUser(_x5, _x6, _x7, _x8, _x9) {
        return _insertUser.apply(this, arguments);
      }

      return insertUser;
    }()
  }]);
  return UserModel;
}();

var _default = UserModel;
exports["default"] = _default;