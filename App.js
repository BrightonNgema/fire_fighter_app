import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Onboarding, Home, Confirm } from "./src/Screens";

const AppNavigator = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding
    },
    Home: {
      screen: Home
    },
    Confirm: {
      screen: Confirm
    }
  },
  {
    initialRouteName: "Onboarding",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
