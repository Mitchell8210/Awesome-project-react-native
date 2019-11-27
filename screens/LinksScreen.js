import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello Links</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 30,
    color: "green"
  }
})
