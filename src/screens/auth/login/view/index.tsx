import { StyleSheet, View, Button } from "react-native";
import { useAppDispatch } from "src/features";
import { setAuth } from "src/features/store/app";

export default function App() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          dispatch(setAuth(true));
        }}
        title="Войти"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
