/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import {
  StatusBar,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";

const bgImage =
  "https://images.unsplash.com/photo-1554256092-96709174126a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80";
export default class Home extends Component {
  navigate = () => {
    this.props.navigation.navigate("Confirm");
  };

  render() {
    return (
      <ImageBackground source={{ uri: bgImage }} style={styles.MainContainer}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity style={styles.bottomView} onPress={this.navigate}>
          <Text style={styles.textStyle}>FIRE</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },

  bottomView: {
    width: "50%",
    height: 50,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "20%"
  },

  textStyle: {
    color: "#fff",
    fontSize: 22
  }
});
