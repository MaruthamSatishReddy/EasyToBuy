import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { useEffect } from "react";
import BottomTab from "./navigation/BottomTab";
export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Ionicons: Ionicons.font,
      });
    }
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
