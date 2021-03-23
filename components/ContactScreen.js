// Aboutscreen.js
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contactscreen() {
  return (
    <View style={styles.Container}>
      <Text>Gay!</Text>
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
    // Write CSS code for Contact here
  }
});