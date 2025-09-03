import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import {authStyles as styles} from '../styles/authStyle';

interface LoginFormProps {
  login: (username: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const LoginForm = ({ login, loading, error }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title={loading ? "Loading..." : "Login"}
        onPress={() => login(username, password)}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};



export default LoginForm;