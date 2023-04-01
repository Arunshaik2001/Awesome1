import { StyleSheet, Text, View, Linking} from 'react-native'
import React from 'react'

export default function ActionCard() {
    async function openWebsite(websiteLink: string){
        var canOpen: boolean = await Linking.canOpenURL(websiteLink)
        if(canOpen){
            Linking.openURL(websiteLink)
        }
    }


  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevatedCard]}></View>
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

    },
    elevatedCard: {
        
    }
})