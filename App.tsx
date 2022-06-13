import { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import AppWithNavigation from "src/navigation";
import { store } from "./src/features";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Отображаем сплэш
        await SplashScreen.preventAutoHideAsync();
        // Загружаем шрифты
        // await Font.loadAsync(Entypo.font);
        // Эмуляция запроса на сервер (например взять токен и попытаться получить пользователя)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Скрываем сплэш
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    </View>
  );
}
