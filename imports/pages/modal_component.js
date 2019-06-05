import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
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

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NoteListName: "",
      messageContent: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedDate !== prevProps.selectedDate) {
      this.readFromRealm(this.props.selectedDate);
    }
  }

  addNoteList = (dateString, newName) => {
    Realm.open(databaseOptions).then(realm => {
      const AllNotes = realm.objects("NoteList");
      const notesByDate = AllNotes.filtered("date == $0", dateString);
      const firstNodeByDate = notesByDate[0];
      //console.log("firstNodeByDate: ", firstNodeByDate);

      let shouldWeUpdate = false;
      let noteId = -1;
      AllNotes.forEach(note => {
        if (note && note.id) {
          if (note.id > noteId) noteId = note.id;
        }
      });
      noteId += 1;

      if (firstNodeByDate && firstNodeByDate !== null) {
        shouldWeUpdate = true;
        noteId = firstNodeByDate.id;
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
      if (NoteListByDate[0]) {
        noteMessage = NoteListByDate[0].name;
      }
      this.setState({
        NoteListName: noteMessage
      });
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
    const { selectedDay } = this.props;
    const { NoteListName } = this.state;

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
          <Delete_pic onDeletePress={this.onPressDelete} />

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

  onPressSave = () => {
    this.addNoteList(this.props.selectedDate, this.state.NoteListName);
    this.clearState();
    this.props.toggleModal();
  };

  clearState = () => {
    console.log("clearState called ");
    this.setState({
      NoteListName: ""
    });
  };

  onPressDelete = () => {
    this.deleteNoteList(this.props.selectedDate);
    this.clearState();
    this.props.toggleModal();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={this.props.isOpen}
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          onSwipeComplete={this.props.toggleModal}
          swipeDirection={["up", "left", "down"]}
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

ModalExample.defaultProps = {
  isOpen: false
};

const styles = StyleSheet.create({
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

  modalButton: {
    //borderWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    //alignItems: "center",
    flexDirection: "row"
  }
});

export default ModalExample;
