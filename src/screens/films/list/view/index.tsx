import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { IMAGES_HOST } from "src/features/api";
import { useGetMovieQuery } from "src/features/api/movies";

export default function App() {
  const { data, error, isLoading } = useGetMovieQuery();

  if (isLoading) return <View></View>;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `${IMAGES_HOST}/t/p/w200/${data?.results[0]?.poster_path}`,
        }}
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={25}
      >
        <Image
          source={{
            uri: `${IMAGES_HOST}/t/p/w200/${data?.results[0]?.poster_path}`,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{data?.results[0]?.title}</Text>
        <Text style={styles.overview}>{data?.results[0]?.overview}</Text>
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
    paddingTop: 70,
  },
  image: {
    width: 200,
    height: 300,
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
