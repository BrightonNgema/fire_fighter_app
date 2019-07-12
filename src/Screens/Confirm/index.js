/* eslint-disable quotes */
import React, { Component } from "react";
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
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
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              flex: 1,
              backgroundColor: "#fff"
            }}
          >
            <Image
              source={{
                uri: "https://image.flaticon.com/icons/png/512/53/53804.png",
              }}
              style={{
                height: 15,
                marginTop: 8,
                resizeMode: "contain",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 65,
              width: "100%",
              backgroundColor: "#FFF200",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#000" }}>
              {" "}
              CORRECT ADDRESS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 65,
              width: "100%",
              backgroundColor: "#E1251C",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#fff" }}>
              {" "}
              CONFIRM
            </Text>
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
    top: 50,
  },

  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  textStyle: {
    color: "#fff",
    fontSize: 22
  }
});
