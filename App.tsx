import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import MoviesList from "src/screens/films/list/view";
import { store } from "./src/features";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MoviesList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
