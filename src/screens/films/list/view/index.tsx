import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useAppDispatch } from "src/features";
import { IMAGES_HOST } from "src/features/api";
import { useGetMoviesListQuery } from "src/features/api/movies";
import { setAuth } from "src/features/store/app";

export default function App({ navigation }) {
  const { data, isLoading } = useGetMoviesListQuery();
  const dispatch = useAppDispatch();

  if (isLoading) return <View></View>;

  return (
    <FlatList
      data={data?.results || []}
      renderItem={({ item }) => (
        <TouchableOpacity
          onLongPress={() => {}}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("MoviesDetail", { id: item.id });
          }}
        >
          <View style={styles.card}>
            <Image
              source={{
                uri: `${IMAGES_HOST}/t/p/w200/${item?.poster_path}`,
              }}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                {item?.title || ""}
              </Text>
              <Text
                style={styles.overview}
                numberOfLines={6}
                ellipsizeMode="tail"
              >
                {item?.overview || ""}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(movie) => movie.id.toString()}
      ListFooterComponent={
        <Button
          onPress={() => {
            dispatch(setAuth(false));
          }}
          title="Выйти"
          color="#841584"
        />
      }
      style={{
        marginTop: 20,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 250,
    resizeMode: "cover",
    borderRadius: 20,
  },
  card: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    width: Dimensions.get("window").width - 190,
  },
  title: {
    padding: 15,
    fontSize: 18,
    fontWeight: "900",
  },
  overview: {
    fontSize: 14,
    paddingHorizontal: 15,
  },
});
