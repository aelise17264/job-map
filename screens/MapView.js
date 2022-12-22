import React, {Component} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import MapView from 'react-native-maps';
import {fetchJobs} from '../actions/job_actions';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import axios from 'axios';

import DeckScreen from './DeckScreen';

class MapScreen extends Component {
  // store = store.default.getState();

  state = {
    mapLoaded: false,
    region: {
      latitude: 38.83,
      latitudeDelta: 0.5366,
      longitude: -104.823,
      longitudeDelta: 0.35,
      // latitudeDelta & longitudeDelta are used for calculating the size of the map to avoid stretching it out
    },
  };
  componentDidMount = () => {
    this.setState({mapLoaded: true});
  };

  onRegionChangeComplete = (region) => {
    this.setState({region});
  };

  // callAPI = () => {
  // 	const options = {
  // 		method: 'POST',
  // 		url: 'https://linkedin-jobs-search.p.rapidapi.com/',
  // 		headers: {
  // 			'content-type': 'application/json',
  // 			'X-RapidAPI-Key': 'be50ce4f14mshab1454a2391273cp1988dbjsn9bfd33bc0289',
  // 			'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com',
  // 		},
  // 		data: '{"search_terms":"python programmer","location":"80909","page":"1"}',
  // 	};
  // 	console.log('options', options);
  // 	axios
  // 		.request(options)
  // 		.then((response) => {
  // 			console.log(response.data);
  // 		})
  // 		.catch((error) => {
  // 			console.error(error);
  // 		});
  // };
  pageNavigation = () => {
    // this.callAPI();

    this.props.navigation.navigate('Deck');
    // console.log(this.state.region);
  };
  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      // <Wrapper apiKey={MY_KEY}>
      <View>
        <Text>MapView</Text>
        <MapView
          style={{height: '100%', width: '100%'}}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={{name: 'search'}}
            onPress={this.pageNavigation}
          />
        </View>
      </View>
      // </Wrapper>
    );
  }
}
const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
};

export default MapScreen;
