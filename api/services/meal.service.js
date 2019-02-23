import dummyData from "../utils/mealDummyData";
import Meal from "../models/meal.model";

const MealService = {
    fetchAllMeals() {
        const validMeals = dummyData.meals.map((meal) => {
            const newMeal = new Meal();
            newMeal.id = meal.id;
            newMeal.name = meal.name;
            newMeal.size = meal.size;
            newMeal.price = meal.price;
        });
        return validMeals;
    },

    addMeal(meal){
        const mealLength = dummyData.meals.length;
        const lastId = dummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId;
        dummyData.meals.push(meal);
        return meal;
    },

    getMeal(id){
        const meal = dummyData.meals.find(meal => meal.id === parseInt(id));
        return meal || {};
    },

    destroyOneMeal(id) {
        const mealId = id;
        let isDeleted = false;
        const thisMealId = dummyData.meals.find(meal => Number(meal.id) === Number(mealId));
        const theMealIndexById = dummyData.meals.indexOf(thisMealId);
        const removedMeal = dummyData.meals.splice(theMealIndexById, 1);
        if (removedMeal) {
          isDeleted = true;
        }
        return isDeleted;
      },
    
    
      updateOneMeal(id) {
        const mealId = id;
        const mealToUpdate = dummyData.meals.find(meal => Number(meal.id) === Number(mealId));
        const theMealIndexById = dummyData.meals.indexOf(mealToUpdate);
        const oldData = dummyData.meals.map((oldMeal) => {
          const newItem = new Meal();
          newItem.name = oldMeal.name;
          newItem.size = oldMeal.size;
          newItem.price = oldMeal.prize;
          return newItem;
        });
        const update = dummyData.meals.splice(theMealIndexById, 1, oldData);
        console.log(theMealIndexById);  
        return update;
      }
};

export default MealService;