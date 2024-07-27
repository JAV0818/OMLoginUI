import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Forget() {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleSendOTP = () => {
    setIsOTPSent(true);
  };

  const handleResetPassword = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />

      {!isOTPSent && (
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      )}

      {isOTPSent && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </>
      )}

      <TouchableOpacity
        style={styles.actionButton}
        onPress={isOTPSent ? handleResetPassword : handleSendOTP}
      >
        <Text style={styles.actionButtonText}>
          {isOTPSent ? "Reset Password" : "Send OTP"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Back to Sign In</Text>
      </TouchableOpacity>
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
  actionButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#7d3c20",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  link: {
    color: "#7d3c20",
    marginVertical: 5,
  },
});
