import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Switch extends Component{
  getInitialState() {
    return {
      trueSwitchIsOn: this.props.true,
      falseSwitchIsOn: this.props.false,
    };
  }
  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
  },
  largeText: {
    fontSize: 52,
    color: "white"
  }
});

module.exports = Switch;