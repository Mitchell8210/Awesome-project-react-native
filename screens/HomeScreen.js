import * as WebBrowser from "expo-web-browser"
import React, { useState } from "react"
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Slider
} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { black } from "ansi-colors"

export default function HomeScreen() {
  const [distance, setDistance] = useState(1)
  const [answer, setAnswer] = useState("")
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Button
          style={styles.mybutton}
          color="black"
          title="press Me"
          onPress={() =>
            alert("bitch, you fool! you've been hacked motherfucker")
          }
        />
        <Text style={styles.welcome}>Welcome to my app!</Text>
        <Text style={styles.bees}>
          How many bees do you think will fit inside six tennis balls?
        </Text>
        <View style={styles.slider}>
          <Slider
            style={{ width: 380, height: 50 }}
            minimumValue={1}
            maximumValue={100}
            value={distance}
            onValueChange={val => setDistance(val)}
            step={1}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              width: 380,
              borderBottomWidth: 3,
              borderBottomColor: "blue",
              margin: 10
            }}
          >
            <Text style={styles.scale}>1</Text>
            <Text style={styles.scale}>{distance}</Text>
            <Text style={styles.scale}>100</Text>
          </View>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={e => setAnswer(e)}
          placeholder="write your answer"
        />
        <Text style={styles.answer}>Your Answer: {answer}</Text>
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    )

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    )
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 80
  },
  mybutton: {
    marginTop: 100,
    backgroundColor: "#fffccc",
    color: "black",
    fontSize: 30
  },
  scale: {
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: "blue"
  },
  slider: {
    borderColor: "black",
    borderWidth: 1,
    width: 395,
    margin: 10
  },
  welcome: {
    fontSize: 18,
    marginBottom: 50,
    textAlign: "center"
  },
  bees: {
    fontSize: 27,
    textAlign: "center",
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    paddingLeft: 10,
    width: 395,
    marginLeft: 10
  },
  answer: {
    fontSize: 25,
    marginLeft: 15,
    textDecorationLine: "underline",
    textDecorationStyle: "solid"
  }
})
