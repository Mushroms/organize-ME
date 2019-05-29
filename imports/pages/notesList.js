import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { ifIphoneX } from "react-native-iphone-x-helper";
import ModalExample from "./modal_component";

//const Realm = require("realm");

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
    this.state = {
      selectedDate: null,
      selectedDay: null,
      isOpen: false
    };

    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  render() {
    const markedDates = {
      [this.state.selectedDate]: {
        selected: true,
        disableTouchEvent: false,
        selectedDotColor: "orange"
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Calendar
            onDayLongPress={this.onDayLongPress}
            style={style}
            theme={calendare}
            hideExtraDays
            markedDates={markedDates}
          />
          <ModalExample
            isOpen={this.state.isOpen}
            selectedDay={this.state.selectedDay}
            selectedDate={this.state.selectedDate}
            toggleModal={this.toggleModal}
          />
        </View>
      </View>
    );
  }

  toggleModal = () => {
    this.setState({ isOpen: false });
  };

  onDayLongPress(day) {
    this.setState({
      isOpen: true,
      selectedDay: day.day,
      selectedDate: day.dateString
    });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },

  content: {
    height: "50%",
    width: "100%",
    backgroundColor: "#768489",
    padding: 22,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 40,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },

  contentTitle: {
    fontSize: 20,
    marginBottom: 12
  },

  Modal_container: {
    backgroundColor: "#768489",
    //borderRadius: 10,
    ...ifIphoneX(
      {
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 40,
        height: "100%",
        width: "50%"
      },
      {
        height: "100%",
        width: "67%"
      }
    )
  },
  Blu_container: {
    flex: 1,
    backgroundColor: "#00BFFF",
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
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        height: "100%",
        width: "97%"
      }
    )
  },
  modalButton: {
    //borderWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    //alignItems: "center",
    flexDirection: "row"
  }
});

const style = {
  ...ifIphoneX(
    {
      borderRadius: 40,
      paddingTop: "25%"
    },
    {
      borderRadius: 10,
      paddingTop: "15%"
    }
  )
};

const calendare = {
  backgroundColor: "#ffffff",
  calendarBackground: "#00BFFF",
  textSectionTitleColor: "#000000",
  selectedDayBackgroundColor: "#ff4000",
  selectedDayTextColor: "#000000",
  todayTextColor: "#ff0000",
  dayTextColor: "#000000",
  textDisabledColor: "#d9e1e8",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "#B14A13",
  monthTextColor: "#000000",
  textDayFontFamily: "Menlo-Regular",
  textMonthFontFamily: "Menlo-Regular",
  textDayHeaderFontFamily: "Menlo-Regular",
  textMonthFontWeight: "bold",
  textDayFontSize: 19,
  textMonthFontSize: 20,
  textDayHeaderFontSize: 17
};
