import React from 'react';
import { Button, Form, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default class SearchForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userQuery: ''
    }
  }

  _handleSubmit() {
    this.props.handleSubmit(this.state.userQuery);
  }

  render() {
    return (
      <View behavior="padding" style={styles.container}>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => this.setState({ userQuery: text })}
          placeholder="username or email"
          returnKeyType="go"
          style={styles.input}
        />

        <Button
          color="#3A539B"
          onPress={this._handleSubmit.bind(this)} style={styles.buttonContainer} title="Find">
          <Text style={styles.buttonText}>Find</Text>
        </Button>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
    padding: 20
  },
  buttonText: {
    color: "#ffffff",
    textAlign: 'center',
    fontWeight: 'bold'
  },
  container: {
    padding: 20
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
