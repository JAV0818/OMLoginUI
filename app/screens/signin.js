import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Signin() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
  };

  const handleFacebookLogin = () => {
    // Add Facebook login logic here
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Forget")}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signupp")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleGoogleLogin}
        >
          <Ionicons name="logo-google" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={handleFacebookLogin}
        >
          <Ionicons name="logo-facebook" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
    resizeMode: "contain",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#7d3c20",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlign: "center",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#7d3c20",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  link: {
    color: "#7d3c20",
    marginVertical: 5,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    justifyContent: "center",
    borderTopColor: "#7d3c20",
    borderTopWidth: 0.5,
    paddingTop: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7d3c20",
    width: 50,
    height: 50,
    borderRadius: 35,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#7d3c20",
    marginHorizontal: 10,
  },
  socialButtonText: {
    color: "#000",
    fontSize: 18,
    marginLeft: 10,
  },
});
