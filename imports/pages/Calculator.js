import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import {
  BtnOrdinary,
  BtnZero,
  BtnAC,
  BtnOperation,
  BtnPoint,
  BtnDote,
  BtnPercent,
  BtnResult
} from "./InputButton.js";
import { ifIphoneX } from "react-native-iphone-x-helper";

class Calc extends React.Component {
  state = {
    text: "0",
    prev: ""
  };

  handleClick = (value, prev) => {
    this.setState({
      text: value,
      prev: prev || this.state.prev
    });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.rowCenter}>
          <Text style={styles.textInput}>{this.state.text}</Text>
        </View>

        <View style={styles.row}>
          <BtnAC
            prev={this.state.prev}
            currentState={this.state.text}
            click={this.handleClick}
            value="AC"
          />
          <BtnPoint
            currentState={this.state.text}
            click={this.handleClick}
            value="+/-"
          />
          <BtnPercent
            currentState={this.state.text}
            click={this.handleClick}
            value="%"
          />
          <BtnOperation
            currentState={this.state.text}
            click={this.handleClick}
            value="/"
          />
        </View>
        <View style={styles.row}>
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="1"
          />
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="2"
          />
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="3"
          />
          <BtnOperation
            currentState={this.state.text}
            click={this.handleClick}
            value="*"
          />
        </View>
        <View style={styles.row}>
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="4"
          />
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="5"
          />
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="6"
          />
          <BtnOperation
            currentState={this.state.text}
            click={this.handleClick}
            value="-"
          />
        </View>
        <View style={styles.row}>
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="7"
          />
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="8"
          />
          <BtnOrdinary
            currentState={this.state.text}
            click={this.handleClick}
            value="9"
          />
          <BtnOperation
            currentState={this.state.text}
            click={this.handleClick}
            value="+"
          />
        </View>
        <View style={styles.row}>
          <BtnZero
            currentState={this.state.text}
            click={this.handleClick}
            value="0"
          />
          <BtnDote
            currentState={this.state.text}
            click={this.handleClick}
            value="."
          />
          <BtnResult
            prev={this.state.prev}
            currentState={this.state.text}
            click={this.handleClick}
            value="="
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "#000000"
  },
  row: {
    //flexDirection: "row",
    //textAlign: 'right',
    //width: "100%",
    //height: "15%",
    ...ifIphoneX(
      {
        flexDirection: "row",
        //textAlign: 'right',

        width: "100%",
        height: "12%",
        bottom: 25,
        // marginLeft: 1,
        // marginRight:1,
      },
      {
        flexDirection: "row",
        //textAlign: 'right',
        width: "100%",
        height: "15%"
      }
    )
  },
  rowCenter: {
    flex: 2,

  },
  textInput: {
    color: "#000000",
    backgroundColor: "#00BFFF",
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "flex-end",
    //padding: 10,
    //paddingTop: "10%",
    //width: "100%",
    //height: "95%",
    textAlign: "right",
    //borderRadius: 10,
    //marginTop: 3,
    ...ifIphoneX(
      {
        padding: "5%",
        paddingTop: "25%",
        marginTop: 0,
        borderRadius: 40,
        marginBottom: 10,
        flexDirection: "column",
        width: "100%",
        height: "90%"
      },
      {
        padding: "5%",
        paddingTop: "15%",
        flexDirection: "row",
        borderRadius: 10,
        width: "100%",
        height: "95%"
      }
    )
  }
});

export default Calc;
