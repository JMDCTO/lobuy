"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var indexRouter = _express["default"].Router();

indexRouter.get('/', _controllers.indexPage);
indexRouter.get('/:email', _controllers.userPage);
indexRouter.post('/users', _controllers.userPage);
indexRouter.post('/users/reg', _controllers.userRegPage);
indexRouter.post('/users/sessions', _controllers.loginCachePage);
var _default = indexRouter;
exports["default"] = _default;