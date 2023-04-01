import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style = {styles.cardImage}/>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Hava Mahal</Text>
            <Text style = {styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style = {styles.cardDescription}>Pink City, Jaipur</Text>
            <Text style = {styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
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
        height: 350,
        width: 350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 12
    },
    cardFooter: {
        color: '#000000'
    }
})