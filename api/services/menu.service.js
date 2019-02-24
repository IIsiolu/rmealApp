import dummyData from "../utils/menuDummyData";
import Menu from "../models/menu.model";

const MenuService = {
  fetchMenuList() {
    const theMenu = dummyData.menu.map((menu) => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.mealId = menu.mealId;
      newMenu.date = menu.date;
      return newMenu;
    });
    return theMenu;
  },

  addMenu(menu) {
    const menuId = menu;
    const lengthOfMenu = dummyData.menu.length;
    const lastMenuId = dummyData.menu[lengthOfMenu - 1].id;
    const newId = lastMenuId + 1;
    menuId.id = newId;
    dummyData.menu.push(menu);
    return menu;
  },
};
export default MenuService;