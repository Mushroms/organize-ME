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
          <Text
            style={styles.textInput}
            multiline={true}
          >
              {this.state.text}
          </Text>
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
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignSelf: "center",
    backgroundColor: "#000000",

  },
  row: {

    ...ifIphoneX(
      {

        flexDirection: "row",
        width: "100%",
        height: "12%",
        bottom: 25
      },
      {
        flexDirection: "row",
        width: "100%",
        height: "15%"
      }
    )
  },
  rowCenter: {
    flex: 1,

  },
  textInput: {
    color: "#000000",
    backgroundColor: "#00BFFF",
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "right",

    ...ifIphoneX(
      {
        justifyContent: 'center',
        padding: "5%",
        paddingTop: "25%",
        marginTop: 0,
        borderRadius: 40,
        marginBottom: 10,
        flexDirection: "column",
        width: "100%",
        height: "91%"
      },
      {
        padding: "5%",
        paddingTop: "15%",
        flexDirection: "column",
        borderRadius: 10,
        width: "100%",
        height: "98%"
      }
    )
  }
});

export default Calc;
