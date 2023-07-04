import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';

import {client} from './apollo-client/src';
import {Signin} from './src/components/Signin';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Signin />
      </NavigationContainer>
    </ApolloProvider>
  );
}
