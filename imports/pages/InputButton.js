import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import Style from "./StyleCalc.js";

export default class InputButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          Style.inputButton,
          this.props.highlight ? Style.inputButtonHighlighted : null
        ]}

        onPress={this.props.onPress}
      >
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}
