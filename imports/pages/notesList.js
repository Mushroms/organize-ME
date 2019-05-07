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
//import AddNote from 'organizeME/imports/pages/components/addNote.js';
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { ifIphoneX } from "react-native-iphone-x-helper";
//import ModalExample from "./modal_component.js";
import Modal from "react-native-modal";

export default class CalendarsScreen extends Component {
  state = {
    visibleModalId: null
  };

  constructor(props) {
    super(props);
    this.state = {};
    //this.onDayPress = this.onDayPress.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);
  }
  toggleModal = () => {
    this.setState({ visibleModal: null });
  };

  renderModalContent = () => (
    <View style={styles.content}>
      <TextInput
        style={{
          height: "50%",
          width: "98%"
        }}
        //placeholder="Day"
        placeholderTextColor="#00BFFF"
        multiline={true}
        maxLength={300}
        style={[
          styles.placeholder,
          {
            fontSize: 20,
            textAlign: "left",
            textAlignVertical: "top",
            color: "#00BFFF",
            width: "90%",
            height: "75%"
          }
        ]}
      />
      <Button
        onPress={() => this.setState({ visibleModal: null })}
        title="Close"
      />
    </View>
  );

  render() {
    return (
      //<ScrollView style={styles.container}>
      // <Text style={styles.text}>
      //   Calendar with selectable date and arrows
      // </Text>
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Calendar
            //onDayPress={this.onDayPress}
            onDayLongPress={this.onDayLongPress}
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
          <View style={{ flex: 1 }}>
            <Modal
              isVisible={this.state.visibleModal === "fancy"}
              //backdropColor="#B4B3DB"
              backdropOpacity={0.8}
              animationIn="zoomInDown"
              animationOut="zoomOutUp"
              animationInTiming={600}
              animationOutTiming={600}
              backdropTransitionInTiming={600}
              backdropTransitionOutTiming={600}
              onSwipeComplete={this.toggleModal}
              swipeDirection={["up", "left", "down"]}
            >
              {this.renderModalContent()}
            </Modal>
          </View>
        </View>
      </View>
    );
  }

  // onDayPress(day) {
  //   this.setState({
  //     selected: day.dateString
  //   });
  // }
  onDayLongPress(day) {
    this.setState({
      selected: day.dateString,
      visibleModal: "fancy"
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
    //flex: 1,
    //height: "100%",
    //width: "95%",
    //marginTop: 12,
    //marginBottom: 8,
    //marginLeft: 12,
    //marginRight: 12,
    backgroundColor: "#768489",
    //borderRadius: 10,
    ...ifIphoneX(
      {
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 40,
        height: 0,
        width: "100%"
        //marginLeft: 1,
        //marginRight: 1,
      },
      {
        //marginTop: 2,
        //marginBottom: 2,
        //marginLeft: 10,
        //marginRight: 10,
        //borderRadius: 10,
        height: "100%",
        width: "67%"
      }
    )
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
    ...ifIphoneX(
      {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 40,
        height: "100%",
        width: "97%"
        //marginLeft: 1,
        //marginRight: 1,
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
  //borderRadius: 10,
  //paddingTop: 20,
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
