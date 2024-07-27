import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      <Text style={styles.text}>Welcome to the App</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Click here to go back to Login Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loginButton: {
    width: "70%",
    height: 50,
    backgroundColor: "#7d3c20",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
});
