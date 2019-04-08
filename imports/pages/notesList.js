import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
//import AddNote from 'organizeME/imports/pages/components/addNote.js';
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

export default class NoteList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Calendar style={style} theme={calendare} />
        </View>
      </View>
    );
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
    height: "100%",
    width: "95%",
    marginTop: 12,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "#00BFFF",
    borderRadius: 10
  }
});

const style = {
  borderRadius: 10,
  paddingTop: 20
};

const calendare = {
  backgroundColor: "#ffffff",
  calendarBackground: "#00BFFF",
  textSectionTitleColor: "#000000",
  selectedDayBackgroundColor: "#00adf5",
  selectedDayTextColor: "#000000",
  todayTextColor: "#8E1E5E",
  dayTextColor: "#000000",
  textDisabledColor: "#d9e1e8",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "#B14A13",
  monthTextColor: "#000000",
  textDayFontFamily: "monospace",
  textMonthFontFamily: "monospace",
  textDayHeaderFontFamily: "monospace",
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
