import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import Geocoder from 'react-native-geocoding';
import qs from 'qs';
import {connect} from 'react-redux';

import {FETCH_JOBS} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_KEY = process.env.INDEED_API_KEY;
const MY_KEY = process.env.GOOGLE_API_KEY;
const JOB_QUERY_PARAMS = {
  publisher: 4201738803816157,
  format: 'json',
  v: '2', //api version
  latlong: 1, //get a response from every latlong input
  radius: 25, //jobs within so many miles
  q: 'javascript',
};
Geocoder.init(MY_KEY);

const buildJobsUrl = (zip) => {
  const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip});
  return `${JOB_ROOT_URL}${query}`;
};
let mapDispatchToProps;
export const fetchJobs = (region) => {
  console.log('hit fetchjobs');

  try {
    console.log('inside try');
    const place = {
      latitude: region.latitude,
      longitude: region.longitude,
    };
    console.log('place', place);
    // const RNGeocoder = require('react-native-geocoing');
    // RNGeocoder.fallbackToGoogle(MY_KEY);

    let zip = 80909;
    // Geocoder.from(place);
    // console.log('coder', Geocoder.from(place));
    // console.log('geocoder', Geocoder.from(place)).then((json) => {
    // 	console.log('inside geocoder', json);
    // 	const addressComponent = json.results;
    // 	console.log(addressComponent);
    // 	zip = addressComponent;
    // });

    // .reverseGeocodeLocation(place, (err, data) => {
    // 	if (err) {
    // 		console.log('error', err);
    // 		return;
    // 	}
    // 	console.log('inside zip', data);
    // 	return data;
    // });
    // (err, data) => {
    // 	if (err) {
    // 		console.log('error');
    // 		return;
    // 	}
    // 	console.log('zip data', data);
    // });
    // 	console.warn('zip', zip);
    // 	const url = buildJobsUrl(zip);
    // 	console.log('url', url);
    // 	let data;
    // 	axios
    // 		.get(url)
    // 		.then((res) => {
    // 			console.log(res);
    // 			data = res;
    // 			return data;
    // 		})
    // 		.catch((err) => console.log(err));

    // const axios = require('axios');

    const options = {
      method: 'POST',
      url: 'https://linkedin-jobs-search.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com',
      },
      data: '{"search_terms":"python programmer","location":"30301","page":"1"}',
    };
    let jobs;
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        jobs = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
    let {data} = jobs;
    console.log('data', data);
    mapDispatchToProps = (dispatch) =>
      dispatch({type: FETCH_JOBS, payload: data});
  } catch (err) {
    console.error(err);
  }
  // console.log('end', mapDispatchToProps);
};

connect(mapDispatchToProps)(fetchJobs);
