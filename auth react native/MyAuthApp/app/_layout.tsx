import { Stack } from "expo-router";
import { Button } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{}}>
        <Stack.Screen
          name="index"
          options={{
            title: "หน้าแรก",
            headerTintColor: "#f4511e", 
            headerTitleStyle: { fontWeight: "bold" }, 
            headerShown: true,
            headerTransparent: true, 
          }}
        />
      <Stack.Screen
          name="module/auth/pages/LoginPage"
          options={({ navigation }) => ({
            title: "เข้าสู่ระบบ",
            headerBackVisible: false,
            headerTransparent: true,
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("module/auth/pages/RegisterPage")}
                title="Register"
                color={"#f4511e"}
              />
            ),
            presentation: "modal",
          })}
        />
      </Stack>
    </Provider>
  );
}
