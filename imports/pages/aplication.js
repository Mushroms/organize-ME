"use strict";

import React from "react";
import { View, Text } from "react-native";
import TimerMixin from "react-timer-mixin";
//import { StackNavigator } from "react-navigation";
import Swiper from "react-native-swiper";
import CalculatorPage from "./Calculator.js";
//import WelcomePage from "./welcome-page.js";
import NoteList from "./notesList.js";
import createReactClass from "create-react-class";

const Application = createReactClass({
  // mixins: [TimerMixin],
  // getInitialState: function() {
  //   return {
  //     autoplay: true
  //   };
  // },
  // componentDidMount: function() {
  //   this.setTimeout(() => {
  //     this.setState({
  //       autoplay: false
  //     });
  //   }, 1000);
  // },

  render() {
    return (
      <Swiper
        showsButtons={false}
        loop={true}
        showsPagination={false}
      // autoplay={this.state.autoplay}
      // autoplayTimeout={1}
      >

        <CalculatorPage />
        <NoteList />
      </Swiper>
    );
  }
});
export default Application;


//<WelcomePage />