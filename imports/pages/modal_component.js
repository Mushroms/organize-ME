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
import RealmHelper from "./realmHelper";

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NoteListName: "",
      messageContent: ""
    };
  }

  realmReadCallback = noteMessage => {
    this.setState({
      NoteListName: noteMessage
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedDate !== prevProps.selectedDate) {
      let resultRealm = RealmHelper.readFromRealm(
        this.props.selectedDate,
        this.realmReadCallback
      );
    }
  }

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
          <Delete_pic onPress={this.onPressDelete} />

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
    RealmHelper.addNoteList(this.props.selectedDate, this.state.NoteListName);
    //this.clearState();
    this.props.toggleModal();
    this.props.onSave();
  };

  clearState = () => {
    this.setState({
      NoteListName: ""
    });
  };

  onPressDelete = () => {
    RealmHelper.deleteNoteList(this.props.selectedDate);
    this.clearState();
    this.props.toggleModal();
    this.props.onSave();
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
          avoidKeyboard={false}
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
