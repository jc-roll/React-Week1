import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Header from './components/Header';
import Button from './components/Button';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      }
  }
  
  buttonPress(){
    this.props.navigator.push({
      id: 'Second'
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Header 
          style={styles.text}
          title={this.props.title}
          />
        <Text style={styles.text}>Explore Examples of React Native</Text>
        <Text style={styles.text2}>James Carson Roll</Text>
        <View>
            <Button navigator={this.props.navigator} componentType="Scroll View Example" />
        </View>
        <View >
            <Button navigator={this.props.navigator} componentType="List View Example" />
        </View>
        <View >
            <Button navigator={this.props.navigator} componentType="Progress View Example" />
        </View>
        <View >
            <Button navigator={this.props.navigator} componentType="Text Input View Example" />
        </View>
        <View >
            <Button navigator={this.props.navigator} componentType="Switch View Example" />
        </View>
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
    fontSize: 20,
    color: 'white',
  },
  text2: {
    color: 'white',
    marginBottom: 150,
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
});

module.exports = Main;
