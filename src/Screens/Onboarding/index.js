/* eslint-disable quotes */
import React, { Component } from "react";
import Onboarding from "react-native-onboarding-swiper";

export default class OnboardingScreen extends Component {
  render() {
    return (
      <Onboarding
        controlStatusBar={true}
        pages={[
          {
            backgroundColor: "#fff",
            image: null,
            title: "Welcome",
            subtitle: "Welcome to the Fire Fighter App",
          },
          {
            backgroundColor: "#000",
            image: null,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "green",
            image: null,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          }
        ]}
      />
    );
  }
}
