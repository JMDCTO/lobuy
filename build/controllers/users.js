"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegPage = exports.userPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _usermodel = _interopRequireDefault(require("../models/usermodel"));

var _loginmodel = _interopRequireDefault(require("../models/loginmodel"));

var userModel = new _usermodel["default"]('user_main_data');
var loginModel = new _loginmodel["default"]('user_login_data');

var userPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var email, password, data, _email, feedback, response;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.method == "POST")) {
              _context.next = 14;
              break;
            }

            _context.prev = 1;
            email = req.body.email;
            password = req.body.password;
            _context.next = 6;
            return userModel.selectLogin('id, email, password', email, password);

          case 6:
            data = _context.sent;
            console.log(data.rowCount);

            if (data) {
              res.status(200).json({
                user: data.rows
              });
            } else {}

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            res.status(200).json({
              messages: _context.t0.stack
            });

          case 14:
            if (!(req.method == "GET")) {
              _context.next = 28;
              break;
            }

            _context.prev = 15;
            _email = req.query.email;
            console.log(_email);
            _context.next = 20;
            return userModel.validate(_email);

          case 20:
            feedback = _context.sent;
            console.log(feedback.rows);

            if (feedback.rowCount) {
              response = [{
                continue_reg: 'false',
                error: 'user exists'
              }];
              res.status(200).json({
                feedback: response
              });
            } else {
              response = [{
                continue_reg: 'true',
                error: ''
              }];
              res.status(200).json({
                feedback: response
              });
            }

            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t1 = _context["catch"](15);
            res.status(200).json({
              messages: _context.t1.stack
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11], [15, 25]]);
  }));

  return function userPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.userPage = userPage;

var userRegPage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var email, password, alias, year, month, day, premium, dayInt, finalDay, date, data, firstLogin, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            email = req.body.email;
            password = req.body.password;
            alias = req.body.alias;
            year = req.body.year;
            month = req.body.month;
            day = req.body.day;
            premium = req.body.premium;
            dayInt = parseInt(day);
            finalDay = dayInt.toString();
            date = new Date(year + "-" + month + "-" + finalDay);
            _context2.next = 13;
            return userModel.insertUser(email, password, alias, date, premium);

          case 13:
            data = _context2.sent;
            _context2.next = 16;
            return loginModel.insertLoginInfo(email, "true", date);

          case 16:
            firstLogin = _context2.sent;

            if (data) {
              response = [{
                finished_reg: 'true'
              }];
              res.status(200).json({
                feedback: response
              });
            } else {}

            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](0);
            res.status(200).json({
              messages: _context2.t0.stack
            });

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 20]]);
  }));

  return function userRegPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.userRegPage = userRegPage;