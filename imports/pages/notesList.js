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
import RealmHelper from "./realmHelper";

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null,
      selectedDay: null,
      isOpen: false
    };

    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  componentDidMount() {
    this.getDatesFromRealm();
  }

  determineAllMonthDates = () => {
    const datesOfMonth = [];
    const startMonthDateMoment = moment().startOf("month");
    const daysInCurrentMonth = moment()
      .startOf("month")
      .daysInMonth();
    let dayIndex = 0;

    while (dayIndex < daysInCurrentMonth) {
      const stringDate = startMonthDateMoment.format("YYYY-MM-DD");
      datesOfMonth.push(stringDate);
      startMonthDateMoment.add(1, "day");
      dayIndex++;
    }

    return datesOfMonth;
  };

  setFoundDatesIntoState = realmResults => {
    this.setState({
      noteListByDatesArray: realmResults
    });
  };

  getDatesFromRealm = () => {
    let allMonthDates = this.determineAllMonthDates();
    RealmHelper.findDateInArray(allMonthDates, this.setFoundDatesIntoState);
  };

  generateMarkedDates = () => {
    const { noteListByDatesArray } = this.state;
    if (!noteListByDatesArray) return;
    const markedDates = {};

    noteListByDatesArray.forEach(markedDate => {
      markedDates[markedDate.date] = {
        selected: true,
        disableTouchEvent: false,
        selectedColor: "#adff2f",
        selectedDotColor: "red"
      };
    });

    return markedDates;
  };

  render() {
    const markedDates = this.generateMarkedDates();

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
            onSave={this.getDatesFromRealm}
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
