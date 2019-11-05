import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { ifIphoneX } from "react-native-iphone-x-helper";
import ModalExample from "./modal_component";
import moment from "moment";
import RealmHelper from "./realmHelper";
import MyTextTicker from "./tiker";

export default class CalendarsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null,
      selectedDay: null,
      isOpen: false,
      initialDate: moment().format("YYYY-MM-DD")
    };

    this.onDayPress = this.onDayPress.bind(this);
  }

  componentDidMount() {
    this.getDatesFromRealm();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.initialDate === this.state.initialDate) return null;
    this.getDatesFromRealm();
  }

  determineAllMonthDates = () => {
    const datesOfMonth = [];
    const startMonthDateMoment = moment(this.state.initialDate).startOf(
      "month"
    );
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
        selectedColor: "#A3BE8C",
        selectedDotColor: "red"
      };
    });

    return markedDates;
  };

  render() {
    const markedDates = this.generateMarkedDates();
    //const City = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Calendar
            onMonthChange={month => {
              this.setState({ initialDate: month.dateString });
            }}
            onDayPress={this.onDayPress}
            style={style}
            theme={calendare}
            hideExtraDays
            markedDates={markedDates}
          />
          <MyTextTicker />
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

  onDayPress(day) {
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
    backgroundColor: "#a5c7ff",
    alignItems: "center",
    justifyContent: "center"
  },

  Blu_container: {
    flex: 1,
    backgroundColor: "#2E3440",
    ...ifIphoneX(
      {
        marginTop: 1,
        marginBottom: 5,
        borderRadius: 40,
        height: "100%",
        width: "99%"
      },
      {
        marginTop: 1,
        marginBottom: 2,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        height: "100%",
        width: "99%"
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
  calendarBackground: "#2E3440",
  textSectionTitleColor: "#a5c7ff",
  selectedDayBackgroundColor: "#ffffff",
  selectedDayTextColor: "#2E3440",
  todayTextColor: "#BF616A",
  dayTextColor: "#a5c7ff",
  textDisabledColor: "#d9e1e8",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "#9A93E3",
  monthTextColor: "#a5c7ff",
  textDayFontFamily: "monospace",
  textMonthFontFamily: "monospace",
  textDayHeaderFontFamily: "monospace",
  textMonthFontWeight: "bold",
  textDayFontSize: 19,
  textMonthFontSize: 20,
  textDayHeaderFontSize: 17
};
