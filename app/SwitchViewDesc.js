import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Switch,
  TouchableHighlight
} from 'react-native';

import Header from './components/Header';

var SwitchViewDesc = React.createClass({
      getInitialState() { 
      return { 
        trueSwitchIsOn: true, 
        falseSwitchIsOn: false, 
      }; 
    },
      buttonBack(){
        this.props.navigator.pop();
    },

    render() { 
      return ( 
        <View style={styles.container}> 
          <Header title={this.props.title} />
            <View style={styles.example}>
              <Switch onValueChange={(value) => this.setState({falseSwitchIsOn: value})} 
              style={{marginBottom: 10}} 
              value={this.state.falseSwitchIsOn} /> 
              <Switch onValueChange={(value) => this.setState({trueSwitchIsOn: value})} 
              value={this.state.trueSwitchIsOn} /> 
            </View>
            <TouchableHighlight
                style={styles.button}
                onPress={this.buttonBack}>
            <Text style={styles.buttonText}>Test More Examples</Text>
            </TouchableHighlight>
            <Text style={styles.text}>This is the Switch component description</Text>
        </View>
      );
    }
    });

var examples = [ { title: 'Switches can be set to true or false', render(): ReactElement { return <SwitchViewDesc />; }},
 { title: 'Switches are controlled components', render(): ReactElement { return <Switch />; } } ];





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
  example:{
    flex: .5,
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
exports.title = '<Switch>';
exports.examples = examples;
module.exports = SwitchViewDesc;
