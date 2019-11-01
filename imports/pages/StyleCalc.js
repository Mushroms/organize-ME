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

// * black                                                      #000000
//  * grey                                                       #828997
//  * bright-grey                    unused                      #81a1c1
//  * red                            char escape                 #ff615a
//  * bright-red                     special                     #f58c80
//  * dark-green                     string                      #83ce4d
//  * green                                                      #B1E969
//  * bright-green                   string                      #ddf88f
//  * orange                         number                      #d8a13b
//  * yellow                         operator                    #ebd99c
//  * bright-yellow                  obj props                   #eee5b2
//  * blue                           func def                    #5da9f6
//  * bright-blue                    func call                   #a5c7ff
//  * dark-magenta                   constant                    #9e4fe6
//  * magenta                        class def                   #e86aff
//  * bright-magenta                 class call                  #ddaaff
//  * cyan                           html punctuation            #57b3c1
//  * bright-cyan                    regex                       #00ead7
//  * white                          variable                    #dedacf
//  * bright-white                   keyword                     #ffffff
//  *
//  * nord black 0                   bg                          #2E3440
//  * nord black 1                                               #3B4252
//  * nord black 2                                               #434C5E
//  * nord black 3                                               #4C566A
//  * nord cyan                                                  #8FBCBB
//  * nord bright cyan                                           #88C0D0
//  * nord blue                                                  #81A1C1
//  * nord bright blue                                           #5E81AC
//  * nord red                                                   #BF616A
//  * nord orange                                                #D08770
//  * nord yellow                                                #EBCB8B
//  * nord green                                                 #A3BE8C
//  * nord magenta                                               #B48EAD
//  * nord white 4                                               #d8dee9
//  * nord white 5                                               #E5E9F0
//  * nord white 6                                               #ECEFF4
//  *
//  * nova black                                                 #1E272C
//  * nova grey                                                  #899BA6
//  * nova red                                                   #DF8C8C
//  * nova green                                                 #A8CE93
//  * nova orange                                                #F2C38F
//  * nova yellow                                                #DADA93
//  * nova blue                                                  #83AFE5
//  * nova pink                                                  #D18EC2
//  * nova magenta                                               #9A93E1
//  * nova cyan                                                  #7FC1CA
//  * nova cyan                                                  #8FBCBB
//  * nova white                                                 #E6EEF3
//  * nova gray 1                                                #3C4C55
//  * nova gray 2                                                #556873
//  * nova gray 3                                                #6A7D89
//  * nova gray 4                                                #899BA6
//  * nova gray 5                                                #C5D4DD
//  *
//  *
//  * My color scheme
//  *
//  * academie black                 bg                           #2E3440
//  * academie grey                  comments                     #828997
//  * academie red                   special                      #DF8C8C
//  * academie green                 string                       #A8CE93
//  * academie bright green          string                       #ddf88f
//  * academie orange                number                       #D8A13B
//  * academie yellow                operator                     #EBCB8B
//  * academie blue                  func                         #83AFE5
//  * academie bright blue           doc                          #81A1C1
//  * academie dark blue                                          #5E81AC
//  * academie magenta               class                        #D18EC2
//  * academie purple                constant                     #9A93E1
//  * academie cyan                  symbol                       #88C0D0
//  * academie white                 fg                           #D8DEE9
//  *
