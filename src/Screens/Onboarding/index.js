/* eslint-disable quotes */
import React, { Component } from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image, View } from "react-native";

const fire =
  "https://i.pinimg.com/originals/c3/e0/bc/c3e0bc6b273c2a3aa75a259a5e61b0e6.png";
export default class OnboardingScreen extends Component {
  render() {
    return (
      <Onboarding
        controlStatusBar={true}
        onDone={() => this.props.navigation.navigate("Home")}
        onSkip={() => this.props.navigation.navigate("Home")}
        pages={[
          {
            backgroundColor: "#E8142E",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/06/d2/da/06d2daf6d0f6faddecdb1c8149c790eb.gif"
                }}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                  top: -300
                }}
              />
            ),
            title: "Welcome",
            subtitle: "Welcome to the Fire Fighter App"
          },
          {
            backgroundColor: "#000",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/c3/e0/bc/c3e0bc6b273c2a3aa75a259a5e61b0e6.png"
                }}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper"
          },
          {
            backgroundColor: "green",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/c3/e0/bc/c3e0bc6b273c2a3aa75a259a5e61b0e6.png"
                }}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper"
          },
        ]}
      />
    );
  }
}
