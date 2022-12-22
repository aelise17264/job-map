import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import axios from 'axios';

function SettingScreen() {
  function callAPI() {
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
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View styles={styles.screen}>
      <Text>Make Job API call work</Text>
      <Button title="Call API" onPress={callAPI} />
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({});
