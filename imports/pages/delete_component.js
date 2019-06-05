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
        onPress={() => this.props.onDeletePress()}
      >
        <Image style={styles.container} source={Delete_pic} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container_Delete: {
    height: 40,
    width: 40,
    alignSelf: "flex-start",
    alignItems: "flex-start"
  },
  container: {
    ...ifIphoneX(
      {
        flex: 1,
        height: 35,
        width: 35,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignSelf: "flex-start"
      },
      {
        flex: 1,
        height: 35,
        width: 35,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignSelf: "flex-start"
        //borderRadius: 50
      }
    )
  }
});

export default Delete_pic;
