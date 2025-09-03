import { Provider } from "react-redux";
import { store } from "./store";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="module/auth/page/LoginPage" options={{ title: "Login" }} />
        <Stack.Screen name="module/auth/page/RegisterPage" options={{ title: "Register" }} />
      </Stack>
    </Provider>
  );
}
