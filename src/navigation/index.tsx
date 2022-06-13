import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "src/features";
import { AuthStackScreen } from "./stacks/auth";
import { MoviesStackScreen } from "./stacks/movies";
import { MusicStackScreen } from "./stacks/music";

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Movies"
      component={MoviesStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Music"
      component={MusicStackScreen}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const AppWithNavigation = () => {
  const { isAuth } = useAppSelector((state) => state.app);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isAuth ? (
          <AppStack.Screen
            name="Home"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <AppStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppWithNavigation;
