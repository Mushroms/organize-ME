import React, { Component } from "react";
import { View, Text } from "react-native";
import Style from "./StyleCalc.js";
import InputButton from "./InputButton.js";

const inputButtons = [
  ["C", "CE"],
  [1, 2, 3, "/"],
  [4, 5, 6, "*"],
  [7, 8, 9, "-"],
  [0, ".", "=", "+"]
];

var initialState;

export default class Calc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null,
      isDecimal: null,
      memorizedNumber: 0
    };

    this.initialState = this.state;
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>{this._renderInputButtons()}</View>
      </View>
    );
  }

  _renderInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton
            value={input}
            highlight={this.state.selectedSymbol === input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i}
          />
        );
      }

      views.push(
        <View style={Style.inputRow} key={"row-" + r}>
          {inputRow}
        </View>
      );
    }

    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case "number":
        return this._handleNumberInput(input);
      case "string":
        return this._handleStringInput(input);
    }
  }

  _handleNumberInput(num) {
    let inputValue = this.state.inputValue,
      isDecimal = this.state.isDecimal;

    if (isDecimal) {
      if (num > 0) {
        inputValue = eval(inputValue + num).toString();
      } else {
        inputValue = inputValue + num;
      }
    } else {
      inputValue = inputValue * 10 + num;
    }

    this.setState({
      inputValue: inputValue,
      isDecimal: isDecimal
      //history: this.state.history + inputValue
    });
  }

  _handleStringInput(str) {
    switch (str) {
      case "/":
      case "*":
      case "+":
      case "-":
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
          isDecimal: null
        });
        break;
      case "=":
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        result = eval(previousInputValue + symbol + inputValue);
        let result = Math.floor(result * 100) / 100;
        let isResultDecimal = null;
        if (result % 1 != 0) isResultDecimal = true;

        this.setState({
          previousInputValue: 0,
          inputValue: result,
          selectedSymbol: null,
          isDecimal: isResultDecimal
        });
        break;
      case "C":
        this.setState({
          isDecimal: null,
          selectedSymbol: null,
          previousInputValue: 0,
          inputValue: 0
        });
        break;
      case "CE":
        this.setState({
          isDecimal: this.initialState.isDecimal,
          selectedSymbol: this.initialState.selectedSymbol,
          previousInputValue: this.initialState.previousInputValue,
          inputValue: this.initialState.inputValue
        });
        break;
      case ".":
        let isDecimal = this.state.isDecimal;
        if (isDecimal) break;

        this.setState({
          isDecimal: true,
          inputValue: this.state.inputValue + str
        });
        break;
    }
  }
}


