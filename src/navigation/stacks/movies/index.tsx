import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesList from "src/screens/films/list/view";
import MoviesDetail from "src/screens/films/detail/view";

const MoviesStack = createNativeStackNavigator();
export const MoviesStackScreen = () => {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name="MoviesList"
        component={MoviesList}
        options={{ title: "Фильмы" }}
      />
      <MoviesStack.Screen
        name="MoviesDetail"
        component={MoviesDetail}
        options={({ route }) => ({
          title: "Фильм",
          /* @ts-ignore */
          // title: route.params.id,
          // headerBackTitleVisible: false,
        })}
      />
    </MoviesStack.Navigator>
  );
};
