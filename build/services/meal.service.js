"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mealDummyData = _interopRequireDefault(require("../utils/mealDummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _mealDummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _mealDummyData.default.meals.length;
    var lastId = _mealDummyData.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    var AddUp = {
      id: newId,
      name: meal.name,
      size: meal.size,
      price: meal.price
    };

    _mealDummyData.default.meals.push(AddUp);

    return AddUp;
  },
  getAMeal: function getAMeal(id) {
    var meal = _mealDummyData.default.meals.find(function (meal) {
      return Number(meal.id) === Number(id);
    });

    return meal || {};
  },
  destroyOneMeal: function destroyOneMeal(id) {
    var isDeleted = false;

    var thisMealId = _mealDummyData.default.meals.find(function (meal) {
      return Number(meal.id) === Number(id);
    });

    var theMealIndexById = _mealDummyData.default.meals.indexOf(thisMealId);

    var removedMeal = _mealDummyData.default.meals.splice(theMealIndexById, 1);

    if (removedMeal) {
      isDeleted = true;
    }

    return isDeleted;
  },
  updateOneMeal: function updateOneMeal(a, b) {
    var mealToUpdate = _mealDummyData.default.meals.find(function (meal) {
      return Number(meal.id) === Number(a);
    }); //update meal


    mealToUpdate.id = a;
    mealToUpdate.name = b.name;
    mealToUpdate.size = b.size;
    mealToUpdate.price = b.price;
    return mealToUpdate;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.service.js.map