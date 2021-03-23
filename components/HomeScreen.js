// Aboutscreen.js
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.Container}>
       <Text style={styles.Text}>Johann!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 

  Text: {
    // Write CSS code for HomeScreen here
  }

});