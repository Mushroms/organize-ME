import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import Modal from "react-native-modal";
import Circle_Component from "./circle_component";
import Delete_pic from "./delete_component";
import RealmHelper from "./realmHelper";
import firebase from "react-native-firebase";
import AlarmButton from "./alarmButton";




class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NoteListName: "",
      messageContent: "",
      noteId: 0
    };
  }

  componentDidMount() {
    this.createNotificationChannel();
    this.checkPermission();
  }

  createNotificationChannel = () => {
    // Build a android notification channel
    const channel = new firebase.notifications.Android.Channel(
      "reminder", // channelId
      "Reminders Channel", // channel name
      firebase.notifications.Android.Importance.High // channel importance
    ).setDescription("Used for getting reminder notification");


    // Create the android notification channel
    firebase.notifications().android.createChannel(channel);
  };

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // We've the permission
      this.notificationListener = firebase
        .notifications()
        .onNotification(async notification => {
          // Display your notification
          await firebase.notifications().displayNotification(notification);
        });
    } else {

      try {
        await firebase.messaging().requestPermission();
      } catch (error) {
        Alert.alert(
          "Unable to access the Notification permission. Please enable the Notification Permission from the settings"
        );
      }
    }
  };

  realmReadCallback = (noteMessage, noteId) => {
    this.setState({
      NoteListName: noteMessage,
      noteId
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
    const { selectedDay, selectedDate } = this.props;
    const { NoteListName, noteId } = this.state;


    return (
      <View style={styles.content}>
        <Circle_Component selectedDay={selectedDay} />
        <TextInput
          value={NoteListName}
          placeholderTextColor="#A3BE8C"
          multiline={true}
          maxLength={240}
          style={[
            styles.placeholder,
            {
              fontSize: 20,
              textAlign: "left",
              textAlignVertical: "top",
              color: "#A3BE8C",
              width: "90%",
              height: "65%",
              top: "2%"
            }
          ]}
          onChangeText={text => {
            this.setState({
              NoteListName: text
            });
          }}
        />
        <View style={styles.modalButton}>
          <Delete_pic onDeletePress={this.onPressDelete} />
          <AlarmButton noteId={noteId} noteMessage={selectedDate + ' ' + NoteListName} selectedDate={selectedDate} />
          <TouchableOpacity onPress={this.onPressSave}>
            <Text
              style={{
                color: "#A3BE8C",
                fontSize: 24,
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                alignItems: "flex-end"
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  onPressSave = () => {
    RealmHelper.addNoteList(this.props.selectedDate, this.state.NoteListName);
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

    firebase.notifications().cancelNotification(this.state.noteId.toString());
  };

  render() {
    return (
      <View>
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
          hardwareAccelerated={true}
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
    height: "75%",
    width: "100%",
    backgroundColor: "#4C566A",
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
    backgroundColor: "#4C566A",
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
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },

  titleStyle: {
    fontSize: 20,
    color: "#585858"
  }
});

export default ModalExample;
