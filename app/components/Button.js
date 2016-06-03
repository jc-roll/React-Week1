import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  buttonPress(){
    this.props.navigator.push({
      id: this.props.componentType
    })
  }

  render(){
    console.log("Navigator from Buttons: ", this.props.navigator);
    return (
      <View style={styles.container}>

        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonPress.bind(this)}
        >
          <Text style={styles.buttonText}>{this.props.componentType}</Text>

        </TouchableHighlight>

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

module.exports = Button;
