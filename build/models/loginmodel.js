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

var LoginModel = /*#__PURE__*/function () {
  function LoginModel(table) {
    (0, _classCallCheck2["default"])(this, LoginModel);
    this.pool = _pool.pool;
    this.table = table;
    this.pool.on('error', function (err, client) {
      return "Error, ".concat(err, ", on idle client").concat(client);
    });
  }

  (0, _createClass2["default"])(LoginModel, [{
    key: "insertLoginInfo",
    value: function () {
      var _insertLoginInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, login, lastlogindate) {
        var format, sql;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                format = require('pg-format');
                sql = format('INSERT INTO user_login_data (email, login, lastlogindate, lastlogintime) VALUES (%L, %L, %L::boolean, %L, CURRENT_TIME(2))', [email], [login], [lastlogindate]);
                return _context.abrupt("return", this.pool.query(sql));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function insertLoginInfo(_x, _x2, _x3) {
        return _insertLoginInfo.apply(this, arguments);
      }

      return insertLoginInfo;
    }()
  }, {
    key: "updateLoginInfo",
    value: function () {
      var _updateLoginInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, email, login, lastlogindate) {
        var format, sql;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                format = require('pg-format');
                sql = format('UPDATE user_login_data SET id = %L, email = %L, login = %L, login_date = %L, login_time = CURRENT_TIME(2) WHERE id = %L', [id], [email], [login], [lastlogindate], [id]);
                return _context2.abrupt("return", this.pool.query(sql));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateLoginInfo(_x4, _x5, _x6, _x7) {
        return _updateLoginInfo.apply(this, arguments);
      }

      return updateLoginInfo;
    }()
  }, {
    key: "getLastLogin",
    value: function () {
      var _getLastLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email) {
        var format, sql;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                format = require('pg-format');
                sql = format('SELECT COUNT(*) FROM user_login_data WHERE email = %L', [email]);
                return _context3.abrupt("return", this.pool.query(sql));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getLastLogin(_x8) {
        return _getLastLogin.apply(this, arguments);
      }

      return getLastLogin;
    }()
  }]);
  return LoginModel;
}();

var _default = LoginModel;
exports["default"] = _default;