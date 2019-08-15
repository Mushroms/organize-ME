import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import CalculatorPage from "./Calculator.js";
import Swiper from "react-native-swiper";
import { ifIphoneX } from "react-native-iphone-x-helper";

export default class WelcomePage extends Component {
  render() {
    const Organize = require("../../resourses/Organize.png");
    const Me = require("../../resourses/Me.png");
    return (
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Image style={styles.Organize_container} source={Organize} />
          <Image style={styles.Me_container} source={Me} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  Blu_container: {
    flex: 1,
    //height: "100%",
    //width: "95%",
    //marginTop: 12,
    //marginBottom: 8,
    //marginLeft: 12,
    //marginRight: 12,
    backgroundColor: "#4BBEE3",
    alignItems: "center",
    //borderRadius: 10,
    ...ifIphoneX(
      {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 40,
        height: "100%",
        width: "97%"
      },
      {
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 10,
        marginLeft: 12,
        marginRight: 12,
        height: "100%",
        width: "97%"
      }
    )
  },
  Organize_container: {
    marginTop: "50%",
    //marginLeft: "5%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  Me_container: {
    //marginLeft: "10%",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  }
});

//#00BFFF
//#6600FF
//#0A0A0D
//#4BBEE3
