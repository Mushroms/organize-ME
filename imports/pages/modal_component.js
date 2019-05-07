// import React, { Component } from "react";
// import { StyleSheet, Modal, Text, TouchableHighlight, TouchableOpacity, View, Alert } from "react-native";
// import { ifIphoneX } from 'react-native-iphone-x-helper';
//
// class ModalExample extends Component {
//   state = {
//     modalVisible: false
//   };
//
//   setModalVisible(visible) {
//     this.setState({ modalVisible: visible });
//   }
//
//   render() {
//     return (
//       <View >
//       <TouchableOpacity>
//         <Modal
//
//           animationType="slide"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//           }}
//         >
//           <View style={styles.Modal_container}>
//             <View style={styles.Text_container}>
//               <Text>Hello World!</Text>
//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}
//               >
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>
//
//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}
//         >
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//
//   Modal_container: {
//     flex: 1,
//     //height: "100%",
//     //width: "95%",
//     //marginTop: 12,
//     //marginBottom: 8,
//     //marginLeft: 12,
//     //marginRight: 12,
//     backgroundColor: "#768489",
//     //borderRadius: 10,
//     ...ifIphoneX({
//             marginTop: 0,
//             marginBottom: 0,
//             borderRadius: 40,
//             height: 140,
//             width: "100%",
//             //marginLeft: 1,
//             //marginRight: 1,
//         }, {
//           marginTop: 2,
//           marginBottom: 2,
//           marginLeft: 10,
//           marginRight: 10,
//           borderRadius: 10,
//           height: "100%",
//           width: "67%",
//         })
//   },
//   Text_container: {
//     flex: 1,
//     //height: "100%",
//     //width: "95%",
//     //marginTop: 12,
//     //marginBottom: 8,
//     //marginLeft: 12,
//     //marginRight: 12,
//     //backgroundColor: "#768489",
//     //borderRadius: 10,
//     ...ifIphoneX({
//             marginTop: 0,
//             marginBottom: 0,
//             borderRadius: 40,
//             height: "50%",
//             width: "50%",
//             justifyContent: "center",
//             //marginLeft: 1,
//             //marginRight: 1,
//         }, {
//           marginTop: 2,
//           marginBottom: 2,
//           marginLeft: 10,
//           marginRight: 10,
//           borderRadius: 10,
//           height: "67%",
//           width: "100%",
//         })
//   }
// });
// export default ModalExample;
