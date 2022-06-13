import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { IMAGES_HOST } from "src/features/api";
import { useGetMovieByIdQuery } from "src/features/api/movies";

export default function App({ route }) {
  const { data, isLoading } = useGetMovieByIdQuery(route.params.id);

  if (isLoading) return <View></View>;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `${IMAGES_HOST}/t/p/w200/${data?.poster_path}`,
        }}
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={25}
      >
        <ScrollView>
          <Image
            source={{
              uri: `${IMAGES_HOST}/t/p/w200/${data?.poster_path}`,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{data?.title || ""}</Text>
          <Text style={styles.overview}>{data?.overview || ""}</Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 150,
    height: 250,
    resizeMode: "cover",
    borderRadius: 20,
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    color: "white",
    fontWeight: "900",
  },
  overview: {
    fontSize: 16,
    color: "white",
  },
});
