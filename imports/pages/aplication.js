"use strict";

import React from "react";
//import Swiper from "react-native-swiper";
import Swiper from "react-native-swiper-animated";
import CalculatorPage from "./Calculator.js";
import NoteList from "./notesList.js";
import createReactClass from "create-react-class";
import SplashScreen from "rn-splash-screen";

const Application = createReactClass({
  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 2000);
  },


  render() {
    return (
      <Swiper
        smoothTransition
        loop
        showPagination={false}
        hidePaginationOnLast
      // showsButtons={false}
      // loop={true}
      // showsPagination={false}
      //autoplay={this.state.autoplay}
      //autoplayTimeout={1}
      >
        <CalculatorPage />
        <NoteList />
      </Swiper>
    );
  }
});


export default Application;


