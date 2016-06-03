import React, { Component } from 'react';

import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Switch,
  TouchableHighlight
} from 'react-native';

import Header from './components/Header';



var ScrollViewDesc = React.createClass({
  buttonBack(){
    this.props.navigator.pop();
  },
    render(){
      return (
        <View style={styles.container}>
            <Header title={this.props.title} />  
              <Text style={styles.text}>Try it out by clicking and dragging!</Text>      
              <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
              automaticallyAdjustContentInsets={false}
              onScroll={() => { console.log('onScroll!'); }}
              scrollEventThrottle={200}
              style={styles.scrollView}>
              {THUMBS.map(createThumbRow)}
                <TouchableOpacity
                style={styles.button}
                onPress={() => { _scrollView.scrollTo({y: 0}); }}>
                <Text>Scroll to top</Text>
                </TouchableOpacity>
              </ScrollView>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.buttonBack}>
                  <Text style={styles.buttonText}>Test More Examples</Text>
                </TouchableHighlight>
                <Text style={styles.text}>This is the Scroll component description</Text>
              
          
        </View>
    );
  }
}); 

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
});

var THUMBS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;



const styles = StyleSheet.create({
  scrollView: {
    flex:.5,
    marginBottom: 150,
    backgroundColor: 'white'
  },
  horizontalScrollView: {
    height: 120,
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  text: {
    color: 'white',

  },
  buttonText: {
    fontSize: 20, 
    color: 'white'
  }
});

module.exports = ScrollViewDesc;
