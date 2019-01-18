/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableOpacity,Image,Platform,Button,Alert,DatePickerAndroid} from 'react-native';
import Navigator from './src/navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type
Props = {};

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={text:''}
  }
  render() {
    return (
      <View style={styles.container}>
          <Image
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}   style={{width:100,height:100,alignSelf:'center'}}       />
        <Text style={{'color':'red',textAlign:'center'}}> Getting Engaged</Text>
        <Button title="Log In" style={{"background":"#000000","color":"red"}} onPress={() => this.props.navigation.navigate('Launch')}/>
          <TouchableOpacity>
            <View style={{width:500,backgroundColor:"red"}}>
              <Text>LOG In Touchable Opacity</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignSelf: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
