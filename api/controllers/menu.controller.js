import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenuList(req, res) {
    const allMenus = MenuService.fetchMenuList();
    return res
      .json({
        status: 'success',
        data: allMenus,
      })
      .status(200);
  },

  add(req, res) {
    const createThisNewMenu = req.body;
    const theNewlyCreatedMenu = MenuService.addMenu(createThisNewMenu);
    return res
      .json({
        status: 'success',
        data: theNewlyCreatedMenu,
      })
      .status(201);
  }
};
export default MenuController;