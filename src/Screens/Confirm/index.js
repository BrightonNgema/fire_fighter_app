/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const bgImage =
  "http://www.theinformationlab.co.uk/wp-content/uploads/2016/02/Light.png";
export default class Confirm extends Component {
  render() {
    return (
      <ImageBackground source={{ uri: bgImage }} style={styles.MainContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.topView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.goBack()}
            style={styles.IconContainer}
          >
            <Image
              source={{
                uri: "https://image.flaticon.com/icons/png/512/53/53804.png"
              }}
              style={styles.Icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ ...styles.Buttons, ...styles.yellow }}
          >
            <Text style={styles.blackText}> CORRECT ADDRESS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ ...styles.Buttons, ...styles.red }}
          >
            <Text style={styles.whiteText}> CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: "100%",
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  topView: {
    position: "absolute",
    right: 30,
    top: 50
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
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
  whiteText: { fontSize: 20, fontWeight: "800", color: "#fff" },
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
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center"
  }
});
