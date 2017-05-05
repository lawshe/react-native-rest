import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.splash}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>GitHub App</Text>
        </View>
        <Text style={styles.footer}>Powered by React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    alignItems: 'center',
    backgroundColor: '#A2DED0',
    flex: 1,
    justifyContent: 'center'
  },
  footer: {
    color: '#555555',
    fontSize: 15,
    paddingBottom: 15
  },
  title: {
    color: '#333333',
    fontSize: 35,
    fontWeight: 'bold'
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center'
  }
});
