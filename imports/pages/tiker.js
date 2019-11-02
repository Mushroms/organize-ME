import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import TextTicker from 'react-native-text-ticker'

export default class Example extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 32, color: "#a5c7ff", }}
          duration={10000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={5000}
        >
          Чтоб узнать, где живет твое сердце, обрати внимание, где бродит твой ум в минуты мечтаний.

        </TextTicker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
});

