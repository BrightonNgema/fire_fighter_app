import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Loading, Onboarding, Home, Confirm } from "./src/Screens";

const LoadingStack = createStackNavigator({
  Loading: {
    screen: Loading,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
});

const OnboardingStack = createStackNavigator({
  Onboarding: {
    screen: Onboarding,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
});
const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Confirm: {
      screen: Confirm
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Loading: LoadingStack,
    Onboarding: OnboardingStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
