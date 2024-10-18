import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Clients } from "@screens/Clients";
import { Login } from "@screens/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="clients" component={Clients} />
    </Navigator>
  );
}
