import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MusicList from "src/screens/music/list/view";

const MusicStack = createNativeStackNavigator();
export const MusicStackScreen = () => {
  return (
    <MusicStack.Navigator>
      <MusicStack.Screen
        name="MusicList"
        component={MusicList}
        options={{ title: "Музыка" }}
      />
    </MusicStack.Navigator>
  );
};
