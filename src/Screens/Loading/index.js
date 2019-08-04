import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from "react-redux";
import { actions } from "redux-actions";
import { Loader } from '../../common-component';

const d = "http://alphamag.ir/wp-content/uploads/2018/06/good-1.gif";
class Loading extends Component {
  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");

      if (value !== null) {
        return this.props.navigation.navigate("Home");
      }
      return this.props.navigation.navigate("Onboarding");
    } catch (e) {
      this.props.navigation.navigate("Onboarding");
    }
  };
  render() {
    return <Loader />;
  }
}
const { login, onboard } = actions;
export default connect(state => ({
  user: state.user,
}))(Loading);
