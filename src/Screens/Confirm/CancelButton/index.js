import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
const CancelButton = ({ navigation }) => {
  return (
    <View style={styles.topView}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
        style={styles.IconContainer}
      >
        <Image
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/53/53804.png',
          }}
          style={styles.Icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    position: "absolute",
    right: 20,
    top: "5%"
  },
  IconContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    flex: 1,
    backgroundColor: "#fff"
  },
  Icon: {
    height: 15,
    marginTop: 8,
    resizeMode: "contain"
  }
});
export { CancelButton };
