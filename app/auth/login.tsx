import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ✅ Mock user credentials
  const mockUser = {
    name: "Jordan",
    email: "guard@obsero.com",
    password: "secure123",
    role: "Guard",
  };

  const handleLogin = () => {
    if (email === mockUser.email && password === mockUser.password) {
      setError(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        // Optionally store user info globally here

        router.replace("/home"); // navigate to home screen after login
      }, 1000);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/image.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        style={[
          styles.input,
          error && email !== mockUser.email && styles.inputError,
        ]}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[
          styles.input,
          error && password !== mockUser.password && styles.inputError,
        ]}
      />

      {error && (
        <Text style={styles.errorText}>Incorrect email or password.</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Log In</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 25,
    backgroundColor: "#fff",
  },
  logo: {
    width: 440,
    height: 320,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#444",
    padding: 12,
    borderRadius: 6,
    color: "#000",
    marginBottom: 12,
    fontFamily: "Inter_400Regular",
    backgroundColor: "#f7f7f7",
  },
  inputError: {
    borderColor: "#ff4d4d",
  },
  button: {
    backgroundColor: "#3a6df0",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
  errorText: {
    color: "#ff4d4d",
    fontSize: 13,
    marginBottom: 8,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
});
