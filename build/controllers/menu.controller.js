"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchMenuList: function fetchMenuList(req, res) {
    var allMenus = _menu.default.fetchMenuList();

    return res.json({
      status: 'success',
      data: allMenus
    }).status(200);
  },
  add: function add(req, res) {
    var createThisNewMenu = req.body;

    var theNewlyCreatedMenu = _menu.default.addMenu(createThisNewMenu);

    return res.json({
      status: 'success',
      data: theNewlyCreatedMenu
    }).status(201);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map