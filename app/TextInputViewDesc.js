import React, { Component } from 'react';

import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Header from './components/Header';

  class TextInputViewDesc extends React.Component {
  
   buttonBack(){
    this.props.navigator.push({
      id: 'Main'
    })
  }
  constructor(props) {
    super(props);
    this.state = {text: ''};
  } 


  render() {
    var limit = 30;
    var remainder = limit - this.state.text.length;
    var remainderColor = remainder > 10 ? 'blue' : 'red';
    return (
      <View style={styles.container}> 
          <Header title={this.props.title} />
            
                <View style={styles.rewriteContainer}>
                  <TextInput
                    multiline={false}
                    maxLength={limit}
                    onChangeText={(text) => {
                      text = text.replace(/ /g, '_');
                      this.setState({text});
                      }}
                    style={styles.default}
                    value={this.state.text}
                  />
                  <Text style={[styles.remainder, {color: remainderColor}]}>
                    {remainder}
                  </Text>
                </View>
            
            <TouchableHighlight
                style={styles.button}
                onPress={this.buttonBack}>
            <Text style={styles.buttonText}>Test More Examples</Text>
            </TouchableHighlight>
            <Text style={styles.text1}>This is the Text Input component description</Text>
        </View>
    );
  }
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  default: {
    height: 26,
    width:100,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'white',
    fontSize: 18,
    padding: 4,
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },
  rewriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remainder: {
    textAlign: 'right',
    alignItems: 'center',
  },
  text1: {
    color: 'white',
  },
    label: {
    width: 115,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
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

module.exports = TextInputViewDesc;
