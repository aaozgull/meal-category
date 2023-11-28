import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
//import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route, navigation }) {
  /// {route} props and route hook UseHook are used for same purpose.
  // useRoute hook if your screen is not register a screen component
  //  const route = useRoute();
  //route.params.categoryId;
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);
return <MealsList items={displayMeals}/>
  
}

export default MealsOverviewScreen;

