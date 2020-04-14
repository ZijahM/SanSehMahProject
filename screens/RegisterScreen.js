import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <text>Register</text>
        <TextInput        
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'email@example.com'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Confirm password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Register'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightblue',
    marginBottom: 10,
    marginTop: 10,
  },

 
});


