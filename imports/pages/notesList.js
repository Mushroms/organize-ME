import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
//import AddNote from 'organizeME/imports/pages/components/addNote.js';
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { ifIphoneX } from 'react-native-iphone-x-helper';
import ModalExample from "./modal_component.js";

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      //<ScrollView style={styles.container}>
      // <Text style={styles.text}>
      //   Calendar with selectable date and arrows
      // </Text>
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Calendar
            onDayPress={this.onDayPress}
            style={style}
            theme={calendare}
            hideExtraDays
            markedDates={{
              [this.state.selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange"
              }
            }}
          />
          <ModalExample />
        </View>
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
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
    //height: "100%",
    //width: "95%",
    //marginTop: 12,
    //marginBottom: 8,
    //marginLeft: 12,
    //marginRight: 12,
    backgroundColor: "#00BFFF",
    //borderRadius: 10,
    ...ifIphoneX({
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 40,
            height: "100%",
            width: "97%",
            //marginLeft: 1,
            //marginRight: 1,
        }, {
          marginTop: 2,
          marginBottom: 2,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
          height: "100%",
          width: "97%",
        })
  }
});

const style = {
  //borderRadius: 10,
  //paddingTop: 20,
  ...ifIphoneX({
    borderRadius: 40,
    paddingTop: '25%',
      }, {
        borderRadius: 10,
        paddingTop: '15%',
      })
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

LocaleConfig.locales["ru"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ],
  monthNamesShort: [
    "Янв.",
    "Фев.",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл.",
    "Авг",
    "Сен.",
    "Окт.",
    "Ноя.",
    "Дек."
  ],
  dayNames: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ],
  dayNamesShort: ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."]
};

LocaleConfig.defaultLocale = "";
