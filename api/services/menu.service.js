import dummyData from "../utils/menuDummyData";
import Menu from "../models/menu.model";

const MenuService = {
  fetchMenuList() {
    const theMenu = dummyData.menu.map((menu) => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.period = menu.period;
      return newMenu;
    });
    return theMenu;
  },

  addMenu(menu) {
    const lengthOfMenu = dummyData.menu.length;
    const lastMenuId = dummyData.menu[lengthOfMenu - 1].id;
    const newId = lastMenuId + 1;

    const AddUp = {
      id: newId,
      name: menu.name,
      period: menu.period
    };
    
    dummyData.menu.push(AddUp);
    return AddUp;
  }
};
export default MenuService;