"use strict";

import React from "react";
import { View, Text } from "react-native";
import TimerMixin from "react-timer-mixin";
import SplashScreen from 'react-native-splash-screen';
import Swiper from "react-native-swiper";
import CalculatorPage from "./Calculator.js";
//import WelcomePage from "./welcome-page.js";
import NoteList from "./notesList.js";
import createReactClass from "create-react-class";

const Application = createReactClass({
  // mixins: [TimerMixin],
  // getInitialState: function () {
  //   return {
  //     autoplay: true
  //   };
  // },
  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 3000);
    // this.setTimeout(() => {
    //   this.setState({
    //     autoplay: false
    //   });
    // }, 1000);
  },

  render() {
    return (
      <Swiper
        showsButtons={false}
        //loop={false}
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