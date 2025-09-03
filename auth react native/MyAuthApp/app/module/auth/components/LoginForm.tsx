import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

interface LoginFormProps {
  login: (username: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const LoginForm = ({ login, loading, error }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <Button
        title={loading ? "Loading..." : "Login"}
        onPress={() => login(username, password)}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

export default LoginForm;
