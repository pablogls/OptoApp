import { createStackNavigator } from "@react-navigation/stack";
import InformeScreenLight from "../screens/InformeScreenLight";
import LogInScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Otras pantallas */}
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="InformeScreenLight" component={InformeScreenLight} />
      {/* Otras pantallas */}
    </Stack.Navigator>
  );
};

export default AppNavigator;