"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  addNewMeal: function addNewMeal(req, res) {
    var createThisNewMeal = req.body;

    var theNewlyCreatedMeal = _meal.default.addMeal(createThisNewMeal);

    return res.json({
      status: 'success',
      data: theNewlyCreatedMeal
    }).status(201);
  },
  getASingleMealById: function getASingleMealById(req, res) {
    var usingThisId = req.params.id;

    var theSingleMealFound = _meal.default.getAMeal(usingThisId);

    return res.json({
      status: 'success',
      data: theSingleMealFound
    }).status(200);
  },
  deleteMealById: function deleteMealById(req, res) {
    var usingThisId = req.params.id;

    var mealToDelete = _meal.default.destroyOneMeal(usingThisId);

    return res.json({
      status: 'success',
      data: mealToDelete
    }).status(200);
  },
  updateMealById: function updateMealById(req, res) {
    var mealId = req.params.id;
    var mealBody = req.body;

    var theUpdatedMeal = _meal.default.updateOneMeal(mealId, mealBody);

    return res.json({
      status: 'success',
      data: theUpdatedMeal
    }).status(200);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map