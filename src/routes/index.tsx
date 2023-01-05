import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@src/utils/auth";
import OnBoardingRoutes from "./OnBoardingRoutes";
import { ActivityIndicator, View } from "react-native";
import colors from "../theme/colors";

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
  },
};

export default function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    isAuthenticated();
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={colors.BLACK} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={defaultTheme}>
      <OnBoardingRoutes />
    </NavigationContainer>
  );
}
