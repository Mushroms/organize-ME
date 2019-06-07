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
import { ifIphoneX } from "react-native-iphone-x-helper";
import ModalExample from "./modal_component";
import moment from "moment";

//const Realm = require("realm");

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    //this.messageRef = React.createRef();
    this.state = {
      selectedDate: null,
      selectedDay: null,
      isOpen: false
    };

    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  componentDidMount() {
    console.log("mounted");

    console.log("All month dates: ", this.determineAllMonthDates());
  }

  determineAllMonthDates = () => {
    const datesOfMonth = [];
    const startMonthDateMoment = moment().startOf("month");
    const daysInCurrentMonth = moment()
      .startOf("month")
      .daysInMonth();
    let dayIndex = 0;

    while (dayIndex < daysInCurrentMonth) {
      const stringDate = startMonthDateMoment.format("DD.MM.YYYY");
      datesOfMonth.push(stringDate);
      startMonthDateMoment.add(1, "day");
      dayIndex++;
    }

    return datesOfMonth;
  };

  render() {
    // console.log(Calendar);
    console.log("Calend", Calendar);
    const markedDates = {
      [this.state.selectedDate]: {
        selected: true,
        disableTouchEvent: false,
        selectedColor: "#ffffff",
        selectedDotColor: "red"
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Calendar
            onMonthChange={month => {
              console.log("month changed", month);
            }}
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
  selectedDayBackgroundColor: "#ffffff",
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
