import React from 'react';
import { KeyboardAvoidingView, Image, StyleSheet, Text, View } from 'react-native';
import SearchForm from './SearchForm';
import User from '../User/User.js';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searching: false,
      userData: null
    }
  }

  searchUser(user) {
    this.setState({ searching: true });
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((responseJson) => {
        const userData = ( responseJson && responseJson.login ) ? responseJson : null;
        this.setState({ searching: false, userData});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.searchUser('lawshe');
  }

  handleSubmit(userName) {
    this.searchUser(userName);
  }

  render() {

    let userJsx = this.state.userData ?
      <View><User user={this.state.userData} /></View>
    : <View><Text>User Not Found</Text></View>;

    let searchingJsx = this.state.searching && this.state.user ?
      <View><Text>Searching...</Text></View>
    : <View>{userJsx}</View>;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo} source={require('../../images/stormtrooper_octocat.png')} />
          <Text style={styles.title}>GitHub User Search</Text>
        </View>

        <View style={styles.formContainer}>
          <SearchForm handleSubmit={this.handleSubmit.bind(this)} />
        </View>

        <View style={styles.section}>
          {searchingJsx}
        </View>
      </KeyboardAvoidingView>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#68C3A3',
    flex: 1
  },
  formContainer: {
    flex: 1
  },
  logo: {
    height: 100,
    width: 100
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  section: {
    flex: 1,
    padding: 20
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    width: 100
  },
  underline: {
    textDecorationLine: 'underline'
  }
});
