import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import PropTypes from "prop-types";

export class Circle_Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedDay } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.number}>{selectedDay}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...ifIphoneX(
      {
        height: "20%",
        width: "24%",
        backgroundColor: "#4BBEE3",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        borderRadius: 50
      },
      {
        height: "15%",
        width: "20%",
        minHeight: "10%",
        minWidth: "12%",
        backgroundColor: "#4BBEE3",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        borderRadius: 50
      }
    )
  },

  number: {
    fontSize: 30
  }
});

Circle_Component.propTypes = {
  selectedDay: PropTypes.number
};

export default Circle_Component;
