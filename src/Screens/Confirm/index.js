/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Image, Modal } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { TwoButtons } from "./Buttons";
import { CancelButton } from "./CancelButton";
import { GooglePlacesInput } from "./AutoComplete";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoder";
import DeviceInfo from "react-native-device-info";

import CurrentLocationButton from "./CurrentLocation";
import { withApollo } from "react-apollo";
const fireIcon = "https://img.icons8.com/color/144/000000/fire-element.png";
import { mutation } from "graphql-actions";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Loader } from "../../common-component";

const { addReport } = mutation;

const Delta = {
  latitudeDelta: 0.0122,
  longitudeDelta: 0.0021
};
class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
      currentLoc: true,
      correctAddress: false,
      address: {
        coords: {},
        fullAddress: ""
      },
      loading: true,
      modalVisible: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        ...Delta
      }
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: false });
    this.currentLocation();
    const IP = await DeviceInfo.getIPAddress();
    this.setState({ ip: IP });
  };

  AddReport = async () => {
    this.setState({ loading: true });
    try {
      const {
        ip,
        address: { fullAddress, coords }
      } = this.state;
      const data = await this.props.client.mutate({
        mutation: addReport,
        variables: {
          input: {
            ipAddress: ip,
            address: {
              fulladdress: fullAddress,
              geo: coords
            }
          }
        }
      });

      return this.setState({ loading: false, modalVisible: true });
    } catch (error) {
      this.setState({ loading: true });
      const message = error.message.replace("GraphQL error: ", "");
      return { message, status: false };
    }
  };

  currentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      this.setState(
        {
          region: {
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
            ...Delta
          }
        },
        () => this.GeoCoding()
      );
    });
  };

  GeoCoding = () => {
    const coords = {
      lat: this.state.region.latitude,
      lng: this.state.region.longitude
    };
    let _this = this;
    Geocoder.geocodePosition(coords)
      .then(res => {
        _this.setState({
          address: {
            coords: res[0].position,
            fullAddress: res[0].formattedAddress
          }
        });
      })
      .catch(err => console.log(err));
  };

  _suggestionSelect = (data, details) => {
    this.setState({
      region: {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        ...Delta
      },
      address: {
        coords: details.geometry.location,
        fullAddress: details.formatted_address
      }
    });
  };

  correctAddress = () => {
    this.setState(prevState => ({
      correctAddress: !prevState.correctAddress
    }));
  };

  onDragged = e => {
    this.setState(
      {
        region: {
          ...e.nativeEvent.coordinate,
          ...Delta
        }
      },
      () => this.GeoCoding()
    );
  };

  render() {
    const { loading, correctAddress } = this.state;
    if (loading) {
      return <Loader />;
    }
    return (
      <View style={styles.MainContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                height: 30,
                width: 30,
                borderRadius: 15,
                position: "absolute",
                top: 50,
                right: 20,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => {
                this.setState({ modalVisible: !this.state.modalVisible });
                return this.props.navigation.goBack();
              }}
            >
              <Text style={{ color: "#fff" }}>X</Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: "center",
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  textAlign: "center",
                  paddingHorizontal: 20,
                  marginBottom: 30,
                  fontWeight: "bold"
                }}
              >
                Thank You For Being A Great Citizen!
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  paddingHorizontal: 50,
                  marginBottom: 30,
                  fontWeight: "bold",
                  color: "green"
                }}
              >
                Your report has been successfully sent!
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: !this.state.modalVisible });
                  return this.props.navigation.goBack();
                }}
              >
                <Image
                  source={{
                    uri:
                      "https://sssc.vic.edu.au/wp-content/uploads/2018/08/checkmark.gif"
                  }}
                  style={{
                    height: 100,
                    width: 100,
                    resizeMode: "contain",
                    borderRadius: 50
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <StatusBar barStyle="dark-content" />
        <View style={{ height: "100%" }}>
          <MapView
            style={{ height: "100%", width: "100%" }}
            region={this.state.region}
            onPress={this.onDragged}
          >
            <Marker
              style={{ maxWidth: 10, maxHeight: 10 }}
              coordinate={this.state.region}
              draggable
              onDragEnd={this.onDragged}
              image={{ uri: fireIcon, height: 5, width: 5 }}
              animateMarkerToCoordinate={{
                coordinate: [
                  this.state.region.latitude,
                  this.state.region.longitude
                ],
                duration: 1000
              }}
            />
          </MapView>
          <GooglePlacesInput
            correctAddress={correctAddress}
            onSearch={this._suggestionSelect}
          />
          <CancelButton {...this.props} />
          <CurrentLocationButton
            onCurrent={this.currentLocation}
            on={correctAddress}
          />
        </View>
        <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <TwoButtons
            onConfirm={this.AddReport}
            onCorrectAddress={this.correctAddress}
            {...this.state}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: "100%"
  },
  topView: {
    position: "absolute",
    right: 30,
    top: 50
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "16%"
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

export default withApollo(Confirm);
