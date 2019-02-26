"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menuDummyData = _interopRequireDefault(require("../utils/menuDummyData"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  fetchMenuList: function fetchMenuList() {
    var theMenu = _menuDummyData.default.menu.map(function (menu) {
      var newMenu = new _menu.default();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.period = menu.period;
      return newMenu;
    });

    return theMenu;
  },
  addMenu: function addMenu(menu) {
    var lengthOfMenu = _menuDummyData.default.menu.length;
    var lastMenuId = _menuDummyData.default.menu[lengthOfMenu - 1].id;
    var newId = lastMenuId + 1;
    var AddUp = {
      id: newId,
      name: menu.name,
      period: menu.period
    };

    _menuDummyData.default.menu.push(AddUp);

    return AddUp;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=menu.service.js.map