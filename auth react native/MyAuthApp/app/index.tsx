import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go to Login" onPress={() => router.push("../module/auth/pages/LoginPage")} />
      <Button title="Go to Register" onPress={() => router.push("../module/auth/pages/RegisterPage")} />

    </View>
  );
}
