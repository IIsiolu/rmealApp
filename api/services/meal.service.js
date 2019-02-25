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
            return newMeal;
        });
        return validMeals;
    },

    addMeal(meal){
        const mealLength = dummyData.meals.length;
        const lastId = dummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        
        const AddUp = {
          id: newId,
          name: meal.name,
          size: meal.size,
          price: meal.price
        };
        
        dummyData.meals.push(AddUp);
        return AddUp;
    },

    getAMeal(id){
        const meal = dummyData.meals.find(meal => Number(meal.id) === Number(id));
        return meal || {};
    },

    destroyOneMeal(id) {
        let isDeleted = false;
        const thisMealId = dummyData.meals.find(meal => Number(meal.id) === Number(id));
        const theMealIndexById = dummyData.meals.indexOf(thisMealId);
        const removedMeal = dummyData.meals.splice(theMealIndexById, 1);
        if (removedMeal) {
          isDeleted = true;
        }
        return isDeleted;
      },
    
    
      updateOneMeal(a, b) {
        const mealToUpdate = dummyData.meals.find(meal => Number(meal.id) === Number(a));

        //update meal
        mealToUpdate.id = a;
        mealToUpdate.name = b.name;
        mealToUpdate.size = b.size;
        mealToUpdate.price = b.price;
        return mealToUpdate;
      }
};

export default MealService;