import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

interface RegisterFormProps {
  register: (username: string, password: string) => Promise<void>;
}

const RegisterForm = ({ register }: RegisterFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMsg("Passwords do not match");
      return;
    }
    await register(username, password);
    setMsg("Registered successfully!");
  };

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
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <Button title="Register" onPress={handleRegister} />
      {msg && <Text>{msg}</Text>}
    </View>
  );
};

export default RegisterForm;
