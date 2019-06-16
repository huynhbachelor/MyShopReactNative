import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';


export default class SignUp extends Component {

  state={
    name: '',
    email: '',
    pass: '',
    repass: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder='Enter your name'
          onChangeText={(name) => { this.setState({ name }); }}
          value={this.state.name}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Enter your email'
          onChangeText={(email) => { this.setState({ email }); }}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Enter your password'
          secureTextEntry
          onChangeText={(pass) => { this.setState({ pass }); }}
          value={this.state.pass}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Re-Enter your password'
          secureTextEntry
          onChangeText={(repass) => { this.setState({ repass }); }}
          value={this.state.repass}
        />
        <Button 
          title='Sign Up Now'
          buttonStyle={styles.bigButton}
          titleStyle={styles.buttonText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 20,
    paddingLeft: 30
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: '400'
  }
});
