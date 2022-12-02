import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AuthScreen from '../screens/AuthScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

function Slides(props) {
	const navigation = useNavigation();

	function renderLastSlide(index) {
		if (index === props.data.length - 1) {
			return (
				<Button
					title="Let's Go!"
					raised
					buttonStyle={styles.buttonStyle}
					onPress={() => navigation.navigate('Auth')}
				/>
			);
		}
	}

	function renderSlides() {
		return props.data.map((slide, index) => {
			return (
				<View
					key={slide.text}
					style={[styles.slideStyle, { backgroundColor: slide.color }]}
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{renderLastSlide(index)}
				</View>
			);
		});
	}

	return (
		<ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
			{renderSlides()}
		</ScrollView>
	);
}

const styles = {
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH,
	},
	textStyle: {
		fontSize: 30,
		color: 'white',
		width: '85%',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: '5%',
	},
	buttonStyle: {
		backgroundColor: '#7743DB',
	},
};

export default Slides;
