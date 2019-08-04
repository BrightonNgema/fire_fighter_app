/* eslint-disable quotes */
import React, { Component } from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image, View, TextInput, Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";
import { mutation } from "graphql-actions";
import { withApollo } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";
import { Text } from "react-native";

const { registerUser } = mutation;

const screenWidth = Dimensions.get("window").width;
const cellnumber = /^(\+?27|0)[6-8][0-9]{8}$/;
const number = new RegExp("^[0-9]+$");
const cellnumberValid = value => {
  return cellnumber.test(value) && number.test(value);
};
const fire =
  "https://i.pinimg.com/originals/c3/e0/bc/c3e0bc6b273c2a3aa75a259a5e61b0e6.png";
class OnboardingScreen extends Component {
  state = {
    cellnumber: "",
    deviceId: DeviceInfo.getUniqueID(),
    loading: false
  };

  onNumber = e => {
    this.setState({
      cellnumber: e,
    });
  };

  onDone = async () => {
    if (cellnumberValid(this.state.cellnumber)) {
      await this.registerUser();
    } else {
      alert("Invalid Cell Number");
    }
  };

  registerUser = async () => {
    this.setState({ loading: true });
    try {
      const { cellnumber, deviceId } = this.state;
      const res = await this.props.client.mutate({
        mutation: registerUser,
        variables: {
          input: { cellnumber, deviceId },
        }
      });

      return this.storeData(res.data.registerUser.token);
    } catch (error) {
      const message = error.message.replace("GraphQL error: ", "");
      this.setState({ loading: false });

      return alert(message);
    }
  };

  storeData = async token => {
    try {
      await AsyncStorage.setItem("@token", JSON.stringify(token));
      this.setState({ loading: false });
      this.props.navigation.navigate("Home");
    } catch (e) {
      alert("We couldnt save your token");
    }
  };
  render() {
    return (
      <Onboarding
        controlStatusBar={true}
        skipLabel=""
        onDone={this.onDone}
        pages={[
          {
            backgroundColor: "#210A1F",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/78/49/a2/7849a2167f5fe5394c0f0701dd262360.gif",
                }}
                style={{
                  width: "100%",
                  height: 300,
                  resizeMode: "stretch"
                }}
              />
            ),
            title: DeviceInfo.getUniqueID(),
            subtitle: "Welcome to the Fire Fighter App",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/c3/e0/bc/c3e0bc6b273c2a3aa75a259a5e61b0e6.png",
                }}
                style={{ width: 300, height: 300, resizeMode: "contain" }}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#D0C1E8",
            title: "Please Provide Your Cell Number",
            image: (
              <View>
                <TextInput
                  onChangeText={e => this.onNumber(e)}
                  style={{
                    height: 45,
                    width: 300,
                    backgroundColor: "#9674CE",
                    marginTop: 10,
                    maxWidth: 300,
                    borderRadius: 5,
                    margin: "auto",
                    alignSelf: "center",
                    width: screenWidth - 10,
                    color: "#000",
                    fontSize: 20,
                    paddingHorizontal: 5
                  }}
                />
                <Image
                  source={{
                    uri:
                      "https://www.iconbunny.com/icons/media/catalog/product/3/8/3885.12-calling-icon-iconbunny.jpg",
                  }}
                  style={{
                    width: 1,
                    height: 1,
                    alignSelf: "center",
                    resizeMode: "contain",
                    borderRadius: 150
                  }}
                />
              </View>
            ),

            subtitle:
              "It will be call for more information regarding reports you send to us.",
          }
        ]}
      />
    );
  }
}

export default withApollo(OnboardingScreen);
