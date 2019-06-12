import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default class Main extends Component {

  gotoAuthencation = () => {
    this.props.navigation.navigate('Auth');
  }

  gotoChageInfor = () => {
    this.props.navigation.navigate('ChangeInfor');
  }

  gotoOrderHistory = () => {
    this.props.navigation.navigate('Oder');
  }


  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.gotoAuthencation}>
          <Text>goto Authencation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
