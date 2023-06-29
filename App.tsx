import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {client} from './apollo-client/src';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.view}>
        <Text style={styles.text}>App</Text>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
});
