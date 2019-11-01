import React, { Component } from "react";
import {
  Platform,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import firebase from "react-native-firebase";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import PropTypes from "prop-types";

export default class AlarmButton extends Component {
  static defaultProps = {
    noteId: PropTypes.int,
    noteMessage: PropTypes.string,
    selectedDate: PropTypes.string
  };

  state = {
    enableNotification: true,
    isDateTimePickerVisible: false,
    notificationTime: moment()
  };



  componentDidUpdate(prevProps, prevState) {
    const { notificationTime, enableNotification } = this.state;

    if (
      enableNotification !== prevState.enableNotification ||
      notificationTime !== prevState.notificationTime
    ) {
      this.setReminder();
    }
  }

  setReminder = async () => {
    const { notificationTime, enableNotification } = this.state;

    if (enableNotification) {


      firebase.notifications().scheduleNotification(this.buildNotification(), {
        fireDate: notificationTime.valueOf(),
        exact: true
      });

    } else {
      return false;
    }
  };

  buildNotification = () => {

    const { noteId, noteMessage } = this.props;
    const title = Platform.OS === "android" ? "Organize ME" : "";
    const notification = new firebase.notifications.Notification()
      .setNotificationId(noteId.toString())
      .setTitle(title)
      .setBody(noteMessage)
      .android.setPriority(firebase.notifications.Android.Priority.High)
      .android.setChannelId("reminder")
      .android.setAutoCancel(true);

    return notification;

  };

  enableNotification = value => {
    this.setState({
      enableNotification: value
    });

  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.hideDateTimePicker();

    this.setState({
      notificationTime: moment(date)
    });

  };

  render() {

    const {
      enableNotification,
      isDateTimePickerVisible,
      notificationTime
    } = this.state;
    const { selectedDate } = this.props;

    return (
      <View>
        <TouchableOpacity
          title="Show DatePicker"
          onPress={this.showDateTimePicker}
          switch={{
            onValueChange: this.enableNotification,
            value: enableNotification
          }}
        >
          <Text style={{ color: "#BF616A", marginTop: 6, fontSize: 18 }}>Alarm</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode="time"
          is24Hour={true}
          date={new Date(selectedDate)}

        />
      </View>
    );
  }
}
