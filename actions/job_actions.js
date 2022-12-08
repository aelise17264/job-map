import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import Geocoder from 'react-native-geocoder';
import qs from 'qs';
import { connect } from 'react-redux';

import { FETCH_JOBS } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_KEY = process.env.INDEED_API_KEY;
const MY_KEY = process.env.GOOGLE_API_KEY;
const JOB_QUERY_PARAMS = {
	publisher: JOB_KEY,
	format: 'json',
	v: '2', //api version
	latlong: 1, //get a response from every latlong input
	radius: 25, //jobs within so many miles
	q: 'javascript',
};
Geocoder.fallbackToGoogle(MY_KEY);

const buildJobsUrl = (zip) => {
	const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
	return `${JOB_ROOT_URL}${query}`;
};
let mapDispatchToProps;
export const fetchJobs = async ({ latitude, longitude }) => {
	console.log('hit fetchjobs');
	try {
		console.log('inside try');
		let zip = await Geocoder.geocodeAddress({ latitude, longitude }).then(
			(res) => {
				console.log('res', res);
			}
		);
		// .then((zipcode) => zipcode)
		// .catch((err) => err);
		console.warn('zip', zip);
		const url = buildJobsUrl(zip);
		console.log('url', url);
		let { data } = axios.get(url);
		console.log('data', data);
		mapDispatchToProps = (dispatch) =>
			dispatch({ type: FETCH_JOBS, payload: data });
	} catch (err) {
		console.error(err);
	}
	console.log('end', mapDispatchToProps);
};

connect(mapDispatchToProps)(fetchJobs);
