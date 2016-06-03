import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Header from './components/Header';

class ListViewDesc extends Component {

  buttonBack(){
    this.props.navigator.pop();
  }

  render(){

    console.log("title: ", this.props.title);

    return (
      <View style={styles.container}>
        <Header
          title={this.props.title}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.buttonBack.bind(this)}
          >
            <Text style={styles.buttonText}>Back To Example List</Text>
          </TouchableHighlight>
          <Text style={styles.text}>This is the List View component description</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  text: {
    color: 'white',
  },
  button: {
    flex: .05 ,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,  
    overflow:'hidden', 
    borderRadius:18, 
    backgroundColor: 'green',
    margin: 10,
    width:300
  },
  buttonText: {
    fontSize: 20, 
    color: 'white'
  }
});

module.exports = ListViewDesc;