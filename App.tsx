import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStack} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={$container}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

const $container = {
  flex: 1,
};
