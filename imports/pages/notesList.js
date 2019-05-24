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
import Modal from "react-native-modal";
import Circle_Component from "./circle_component";

const Realm = require("realm");

const NoteListSchema = {
  name: "NoteList",

  properties: {
    name: "string",
    NoteList: "string"
  }
};

export default class CalendarsScreen extends Component {
  state = {
    visibleModalId: null,
    selectedDay: null,
    selectedDate: null
  };

  constructor(props) {
    super(props);
    this.state = {
      NoteList: ""
    };
    //this.onDayPress = this.onDayPress.bind(this);
    this.onPressSave = this.onPressSave.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  toggleModal = () => {
    this.setState({ visibleModal: null });
  };

  newNoteList = () => {
    Realm.open({
      schema: [{ name: "NoteListSchema", properties: { name: "string" } }]
    }).then(realm => {
      realm.write(() => {
        realm.create(NoteListSchema);
      });
      this.setState({ NoteList });
    });
  };

  renderModalContent = () => {
    const { selectedDay } = this.state;
    const NoteList = this.state.NoteList;

    return (
      <View style={styles.content}>
        <Circle_Component selectedDay={selectedDay} />

        <TextInput
          style={{
            height: "50%",
            width: "50%"
          }}
          onChangeText={text => {
            this.setState({ NoteList: text });
          }}
          placeholderTextColor="#00BFFF"
          multiline={true}
          maxLength={240}
          style={[
            styles.placeholder,
            {
              fontSize: 20,
              textAlign: "left",
              textAlignVertical: "top",
              color: "#00BFFF",
              width: "90%",
              height: "65%",
              top: "2%"
            }
          ]}
        >
          {NoteList}
        </TextInput>
        <Button
          onPress={() =>
            this.setState({
              visibleModal: null,
              createNewNoteList: this.newNoteList
            })
          }
          title="Save"
        />
      </View>
    );
  };

  render() {
    const markedDates = {
      [this.state.selectedDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedDotColor: "orange"
      }
    };
    console.warn(NoteListSchema);
    return (
      <View style={styles.container}>
        <View style={styles.Blu_container}>
          <Calendar
            //onDayPress={this.onDayPress}
            onDayLongPress={this.onDayLongPress}
            style={style}
            theme={calendare}
            hideExtraDays
            markedDates={markedDates}
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
  //     selectedDay: day.day,
  //     selectedDate: day.dateString
  //   });
  // }

  onDayLongPress(day) {
    this.setState({
      selectedDay: day.day,
      visibleModal: "fancy"
    });
  }

  onPressSave() {
    this.setState({
      visibleModal: null,
      createNewNoteList: this.newNoteList
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
        height: 0,
        width: "100%"
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
