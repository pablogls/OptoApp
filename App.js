import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LogInScreen from "./screens/LoginScreen.js";
import InformeScreenLight from "./screens/InformeScreenLight.js";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./navegate/navegate.js";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="InformeScreenLight"
              component={ InformeScreenLight }
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </>
  );
};
export default App;