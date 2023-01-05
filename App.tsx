import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { RootSiblingParent } from "react-native-root-siblings";
import {
  useFonts,
  Inter_400Regular as interRegular,
  Inter_700Bold as interBold,
} from "@expo-google-fonts/inter";

import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    interRegular,
    interBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <Routes />
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
