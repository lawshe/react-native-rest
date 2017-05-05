import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const User = ({ user }) => {
  const reposJSX = ( user && user.public_repos ) ?
    <Text>Repos: {user.public_repos}</Text>
  : <Text></Text>;

  const locationJSX = ( user && user.location) ?
    <Text>Location: {user.location}</Text>
  : <Text></Text>

  const userJSX = user ?
    <Text style={styles.title}>{user.login}</Text>
  : <Text></Text>;

  return (
    <View>
      {userJSX}
      {locationJSX}
      {reposJSX}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#68C3A3',
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default User;
