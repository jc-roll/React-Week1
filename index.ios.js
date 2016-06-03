/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

//passProps={route.passProps}

import First from './app/First';
import Second from './app/Second';

import Main from './app/Main';
// Five new Route Imports
import ScrollViewDesc from './app/ScrollViewDesc';
import ListViewDesc from './app/ListViewDesc';
import ProgressViewDesc from './app/ProgressViewDesc';
import TextInputViewDesc from './app/TextInputViewDesc';
import SwitchViewDesc from './app/SwitchViewDesc';


class ReactNativeInstall extends Component {

  navigatorRenderScene(route,navigator){
      navigator = navigator;
      switch (route.id){
        case 'First':
          return(<First navigator={navigator} title="First Component" />);

        case 'Second':
          return(<Second navigator={navigator} title="Second Component" />);

// Below are the Components that will be used the above are examples

        case 'Main':
          return(<Main navigator={navigator} title="React Examples" />);

        case 'Scroll View Example':
          return(<ScrollViewDesc navigator={navigator} title="Scroll Example" />);

        case 'List View Example':
          return(<ListViewDesc navigator={navigator} title="List Example" />);

        case 'Progress View Example':
          return(<ProgressViewDesc navigator={navigator} title="Progress Example" />);

        case 'Text Input View Example':
          return(<TextInputViewDesc navigator={navigator} title="Text Input Example" />);

        case 'Switch View Example':
          return(<SwitchViewDesc navigator={navigator} title="Switch Example" />);
        }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute = {{
          id: 'Main'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('ReactNativeInstall', () => ReactNativeInstall);
