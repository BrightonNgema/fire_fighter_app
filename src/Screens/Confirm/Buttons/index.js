import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TwoButtons = ({ onCorrectAddress, onConfirm, correctAddress }) => {
  return (
    <View style={styles.bottomView}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onCorrectAddress}
        style={{ ...styles.Buttons, ...styles.yellow }}
      >
        <Text style={styles.blackText}>
          {!correctAddress ? "CORRECT ADDRESS" : "CANCEL"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onConfirm}
        activeOpacity={0.7}
        style={{ ...styles.Buttons, ...styles.red }}
      >
        <Text style={styles.whiteText}> CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    width: "100%"
  },
  Buttons: {
    height: 65,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  yellow: {
    backgroundColor: "#FFF200"
  },
  red: {
    backgroundColor: "#E1251C"
  },
  blackText: { fontSize: 20, fontWeight: "800", color: "#000" },
  whiteText: { fontSize: 20, fontWeight: "800", color: "#fff" }
});

export { TwoButtons };
