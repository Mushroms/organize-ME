import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

export class Delete_pic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Delete_pic = require("../../resourses/delete-icon.png");

    return (
      <TouchableOpacity
        style={styles.container_Delete}
        onPress={() => console.warn("tests")}
      >
        <Image style={styles.container} source={Delete_pic} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container_Delete: {
    flex: 1,
    //borderWidth: 1,
    // borderColor: "red",
    // alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  container: {
    ...ifIphoneX(
      {
        flex: 1,
        height: 3,
        width: 35,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignSelf: "flex-start"
      },
      {
        flex: 1,
        height: 3,
        width: 35,
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignSelf: "flex-start"
        //borderRadius: 50
      }
    )
  }
});

export default Delete_pic;
