import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class FirstComponent extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.textHeadline} >Headline</Text>
        <Text>Subheadline</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textHeadline: {
    color: 'red',
    flex: 1
  }
});

module.exports = FirstComponent;
