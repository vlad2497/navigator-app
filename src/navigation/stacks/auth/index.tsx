import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "src/screens/auth/login/view";

const AuthStack = createNativeStackNavigator();
export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};
