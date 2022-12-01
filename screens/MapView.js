import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import MapView from "react-native-maps";
import { connect, Provider } from "react-redux";
import * as actions from "../actions";
import * as store from "../store";

class MapScreen extends Component {
  // store = store.default.getState();
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    // console.log(region);
    this.setState({ region });
  };

  // onButtonPress = () => {
  // 	this.props.fetchJobs(this.state.region);
  // };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View>
        <Text>MapView</Text>
        <MapView
          style={{ height: "100%", width: "100%" }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: "search" }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
      // </View>
    );
  }
}
const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
};

export default MapScreen;
