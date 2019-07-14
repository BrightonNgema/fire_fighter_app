/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
// import MapboxGL from "@mapbox/react-native-mapbox-gl";
import { TwoButtons } from "./Buttons";
import { CancelButton } from "./CancelButton";
import { GooglePlacesInput } from "./AutoComplete";
import MapView, { Marker } from "react-native-maps";
export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLoc: true,
      correctAddress: false,
      loading: true,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
    //Get current location
  }

  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // }

  _suggestionSelect = (data, details) => {
    this.setState({
      region: {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        ...this.state.region
      }
    });
  };

  correctAddress = () => {
    this.setState(prevState => ({
      correctAddress: !prevState.correctAddress
    }));
  };

  onRegionChange = region => {
    this.setState({ region });
  };

  onDragged = e => {
    console.log(e.nativeEvent.coordinate);
    this.setState({
      region: {
        ...e.nativeEvent.coordinate,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  };

  render() {
    const { loading, correctAddress } = this.state;
    if (loading) {
      return null;
    }
    return (
      <View style={styles.MainContainer}>
        <View style={{ flex: 0.86 }}>
          <MapView
            style={{ height: "100%", width: "100%" }}
            onUserLocationChange={e => console.log("currentloc", e)}
            onRegionChange={this.onRegionChange}
            region={this.state.region}
            onPress={this.onDragged}
          >
            <Marker
              coordinate={this.state.region}
              draggable
              onDragEnd={this.onDragged}
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
        </View>
        <View style={{ flex: 0.16 }}>
          <TwoButtons
            onConfirm={() => alert("Sends to backend")}
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
