import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {connect} from 'react-redux';
import Swipe from '../components/Swipe';
import {MapView} from 'expo';
import {Card, Button} from 'react-native-elements';
import * as actions from '../actions';

class DeckScreen extends Component {
  callAPI = () => {
    const options = {
      method: 'POST',
      url: 'https://linkedin-jobs-search.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be50ce4f14mshab1454a2391273cp1988dbjsn9bfd33bc0289',
        'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com',
      },
      data: '{"search_terms":"python programmer","location":"80909","page":"1"}',
    };
    console.log('options', options);
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        jobs = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // componentDidMount = () => {
  // 	this.callAPI();
  // };
  renderCard(job) {
    // const initialRegion = {
    // 	longitude: job.longitude,
    // 	latitude: job.latitude,
    // 	latitudeDelta: 0.045,
    // 	longitudeDelta: 0.02,
    // 	//deltas set appropriate zoom level
    // };
    return (
      <Card>
        <View style={{height: 300}}>
          <MapView
            scrollEnabled={false}
            style={{flex: 1}}
            cacheEnabled={Platform.OS === 'android' ? true : false} //allows mapview to render correctly across platforms ios vs android
            initialRegion={initialRegion}
          ></MapView>
        </View>
        <Card.Title>{job.job_title}</Card.Title>
        <View style={styles.detailWrapper}>
          <Text>{job.company_name}</Text>
          <Text>{job.posted_date}</Text>
        </View>
        <Card.FeaturedSubtitle href={job.job_url}>
          APPLY
          {/* {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')} */}
        </Card.FeaturedSubtitle>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs">
        <Card.Title
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingBottom: 10,
          }}
        >
          No more jobs
        </Card.Title>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Swipe
          data={this.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: 'blue',
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

// const mapStateToProps = (props) => {
// 	console.log('results', props);
// 	// return { jobs: jobs.results };
// };
// export default connect(mapStateToProps)(DeckScreen);
export default DeckScreen;
