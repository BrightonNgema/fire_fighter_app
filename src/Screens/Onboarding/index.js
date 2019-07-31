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
            backgroundColor: "#210A1F",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/78/49/a2/7849a2167f5fe5394c0f0701dd262360.gif"
                }}
                style={{
                  width: "100%",
                  height: 300,
                  resizeMode: "stretch",
                }}
              />
            ),
            title: "Welcome",
            subtitle: "Welcome to the Fire Fighter App"
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/c3/e0/bc/c3e0bc6b273c2a3aa75a259a5e61b0e6.png"
                }}
                style={{ width: 300, height: 300, resizeMode: "contain" }}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper"
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/c3/e0/bc/c3e0bc6b273c2a3aa75a259a5e61b0e6.png"
                }}
                style={{ width: 300, height: 300, resizeMode: "contain" }}
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
