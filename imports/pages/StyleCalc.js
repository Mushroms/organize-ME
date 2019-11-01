import { StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

var Style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#2E3440"
  },

  displayContainer: {
    flex: 3,
    backgroundColor: "#a5c7ff",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 1,
  },

  displayText: {
    color: "#2E3440",
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
        backgroundColor: "#2E3440"
      },
      {
        flex: 8,
        top: 2,
        marginBottom: 5,
        backgroundColor: "#2E3440"
      }
    )
  },

  inputButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#a5c7f3",
    borderRadius: 10
  },

  inputButtonHighlighted: {
    backgroundColor: "#5E81A2"
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#a5c7f3"
  },

  inputRow: {
    flex: 1,
    flexDirection: "row"
  }
});

export default Style;

