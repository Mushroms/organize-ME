import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import axios from "axios";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export default class MyTextTicker extends Component {

  constructor(props) {
    super(props);
    state = {
      City: '',
      Temperature: ''
    }

  }


  getWeather() {
    const params = {
      access_key: '6be04a644b370f6b41b1158edc7d3fb0',
      query: 'Moscow'
    }

    axios.get('http://api.weatherstack.com/current', { params })
      .then(response => {

        const apiResponse = response.data;
        const City = apiResponse.location.name;
        const Temperature = apiResponse.current.temperature;
        this.setState({ City: City, Temperature: Temperature });

      }).catch(error => {
        console.warn(error);
      });
  }


  componentDidMount() {
    this.getWeather();
  }

  renderCityAndTemperature() {
    if (!this.state) return null;

    const city = this.state.City;
    const Temperature = this.state.Temperature;


    return (<Fragment> {city} {Temperature}</Fragment>)
  }


  render() {
    console.warn(this.state);



    return (
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 32, color: "#a5c7ff", }}

          duration={10000}
          loop
          bounce
          repeatSpacer={30}
          marqueeDelay={5000}
        >
          {this.renderCityAndTemperature()}

        </TextTicker>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
});

//6be04a644b370f6b41b1158edc7d3fb0

//`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`