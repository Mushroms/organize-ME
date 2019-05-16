import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

export class Circle_Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.number}>12</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "25%",
    width: "20%",
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    borderRadius: 50
  },
  number: {
    fontSize: 30
  }
});

export default Circle_Component;
