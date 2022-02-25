"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginCachePage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _loginmodel = _interopRequireDefault(require("../models/loginmodel"));

var loginModel = new _loginmodel["default"]('user_login_data');

var loginCachePage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, email, isLoggedIn, year, month, day, idInt, dayInt, finalDay, date, data, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //login or reg tag ?
            id = req.body.userid;
            email = req.body.email;
            isLoggedIn = true;
            year = req.body.year;
            month = req.body.month;
            day = req.body.day;
            idInt = parseInt(id);
            dayInt = parseInt(day);
            finalDay = dayInt.toString();
            date = new Date(year + "-" + month + "-" + finalDay);
            _context.next = 13;
            return loginModel.updateLoginInfo(idInt, email, isLoggedIn, date);

          case 13:
            data = _context.sent;

            if (data.rowCount) {
              response = [{
                loggedIn: 'true'
              }];
              res.status(200).json({
                feedback: response
              });
            } else {
              response = [{
                loggedIn: 'false'
              }];
              res.status(200).json({
                feedback: response
              });
            }

            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            res.status(200).json({
              messages: _context.t0.stack
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function loginCachePage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.loginCachePage = loginCachePage;