import { StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

var Style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#000000"
  },

  displayContainer: {
    flex: 3,
    backgroundColor: "#4BBEE3",
    justifyContent: "center",
    borderRadius: 10
  },

  displayText: {
    color: "#000000",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "right",
    padding: 20
  },

  inputContainer: {
    ...ifIphoneX(
      {
        flex: 8,
        top: 2,
        marginBottom: 40,
        backgroundColor: "#000000"
      },
      {
        flex: 8,
        top: 2,
        marginBottom: 5,
        backgroundColor: "#000000"
      }
    )
  },

  inputButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#4BBEE3",
    borderRadius: 10
  },

  inputButtonHighlighted: {
    backgroundColor: "#8d8d8d"
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4BBEE3"
  },

  inputRow: {
    flex: 1,
    flexDirection: "row"
  }
});

export default Style;

//#00BFFF
