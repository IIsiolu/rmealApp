"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menu = _interopRequireDefault(require("../controllers/menu.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get('/', _menu.default.fetchMenuList);
router.post('/', _menu.default.add);
var _default = router;
exports.default = _default;
//# sourceMappingURL=menu.route.js.map