import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView style = {styles.container} horizontal = {true}>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardElevated: {
        backgroundColor: '#CAD5E2'
    },
    container: {
        padding: 8
    },
})