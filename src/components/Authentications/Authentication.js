import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Icon, Button } from 'react-native-elements';


export default class Authentication extends Component {

  state={
    isSingIn: true
  }

  gotoSignIn = () => {
    this.setState({
      isSingIn: !this.state.isSingIn
    });
  }

  gotoSignUp = () => {
    this.setState({
      isSingIn: !this.state.isSingIn
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name='clear' color='white' size={36} />
          <Text style={styles.titleStyle}>Wearing a Dress</Text>
          <Icon name='build' color='white' size={32} />
        </View>
        <View style={styles.body}>
          {this.state.isSingIn ? <SignIn /> : <SignUp />}
        </View>
        <View style={styles.footer} >
          <Button
            title='Sign In'
            buttonStyle={styles.signInStyle}   
            containerStyle={styles.containerButton}
            disabled={this.state.isSingIn}
            onPress={this.gotoSignIn}
          />
          <Button
            title='Sign Up'
            buttonStyle={styles.signUpStyle}
            containerStyle={styles.containerButton}
            disabled={!this.state.isSingIn}
            onPress={this.gotoSignUp}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77'
  },
  titleStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 30,
  },
  header: {
    justifyContent: 'space-between',
    backgroundColor: '#3EBA77',
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 5
  },
  body: {
    flex: 12,
  },
  footer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  containerButton: {
    flex: 1,
    marginLeft: 1,
    height: 60
  },
  signInStyle: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  signUpStyle: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },
});

