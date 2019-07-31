/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import {
  StatusBar,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";
const bgImage =
  "https://images.unsplash.com/photo-1554256092-96709174126a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80";
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);

class Home extends Component {
  navigate = () => {
    this.props.navigation.navigate("Confirm");
  };

  render() {
    console.log(this.props);
    return (
      <ImageBackground source={{ uri: bgImage }} style={styles.MainContainer}>
        <StatusBar barStyle="light-content" />
        <AnimatedButton
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.ring}
          onPress={this.navigate}
        >
          <View style={styles.innerCircle}>
            <Text style={styles.textStyle}>FIRE</Text>
          </View>
        </AnimatedButton>
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
  innerCircle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  ring: {
    position: "absolute",
    bottom: "10%",
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "transparent",
    borderColor: "red",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomView: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    backgroundColor: "yellow",
    height: 120,
    width: 120,
    borderRadius: 60
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#142627"
  }
});

export default Home;
