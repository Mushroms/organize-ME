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
import Delete_pic from "./delete_component";

const Realm = require("realm");

const NoteListSchema = {
  name: "NoteList",
  primaryKey: "id",
  properties: {
    id: { type: "int", default: 0 },
    name: "string",
    date: "date"
  }
};
const databaseOptions = {
  path: "organazeME.realm",
  schema: [NoteListSchema],
  schemaVersion: 0
};
export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
    this.state = {
      visibleModalId: null,
      NoteListName: "",
      selectedDate: null,
      selectedDay: null,
      NoteListFromDB: null,
      updateText: "",
      messageContent: ""
    };
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressSave = this.onPressSave.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  toggleModal = () => {
    this.setState({ visibleModal: null });
  };

  addNoteList = (dateString, newName) => {
    Realm.open(databaseOptions).then(realm => {
      const AllNotes = realm.objects("NoteList");
      const notesByDate = AllNotes.filtered("date == $0", dateString);
      const firstNodeByDate = notesByDate[0];

      let shouldWeUpdate = false;
      let noteId = AllNotes.length + 1;

      if (firstNodeByDate && firstNodeByDate !== null) {
        shouldWeUpdate = true;
        noteId = firstNodeByDate.id;

        console.log(" ============= ");
        console.log(shouldWeUpdate, noteId);
        console.log(" ============= ");
      }

      realm.write(() => {
        realm.create(
          "NoteList",
          {
            id: noteId,
            name: newName,
            date: dateString
          },
          shouldWeUpdate
        );
      });
    });
  };

  readFromRealm = selectedDate => {
    Realm.open(databaseOptions).then(realm => {
      let allNotes = realm.objects("NoteList");
      let NoteListByDate = allNotes.filtered("date == $0", selectedDate);
      let noteMessage = "";
      if (NoteListByDate[0] && NoteListByDate[0].name !== "") {
        noteMessage = NoteListByDate[0].name;
      }
      this.setState({ NoteListName: noteMessage });
    });
  };

  deleteNoteList = selectedDate => {
    Realm.open(databaseOptions).then(realm => {
      const allNotes = realm.objects("NoteList");
      const noteByDate = allNotes.filtered("date == $0", selectedDate)[0];

      if (noteByDate) {
        realm.write(() => {
          realm.delete(noteByDate);
        });
      }
    });
  };

  renderModalContent = () => {
    const { selectedDay, NoteListName } = this.state;

    return (
      <View style={styles.content}>
        <Circle_Component selectedDay={selectedDay} />

        <TextInput
          value={NoteListName}
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
          onChangeText={text => {
            this.setState({ NoteListName: text });
          }}
        />
        <View style={styles.modalButton}>
          <Delete_pic onVanyaBitchPress={this.onPressDelete} />
          <Button
            style={{
              height: "10%",
              width: "10%",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center"
            }}
            onPress={this.onPressSave}
            title="Save"
          />
        </View>
      </View>
    );
  };

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
          <View style={{ flex: 1 }}>
            <Modal
              isVisible={this.state.visibleModal === "fancy"}
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

  onDayLongPress(day) {
    this.readFromRealm(day.dateString);

    this.setState({
      selectedDay: day.day,
      visibleModal: "fancy",
      selectedDate: day.dateString
    });
  }

  onPressSave() {
    this.addNoteList(this.state.selectedDate, this.state.NoteListName);
    this.clearState();
  }

  clearState = () => {
    this.setState({
      visibleModal: null,
      selectedDate: null,
      selectedDay: null,
      NoteListName: "",
      NoteListFromDB: null
    });
  };

  onPressDelete() {
    this.deleteNoteList(this.state.selectedDate);
    this.clearState();
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
