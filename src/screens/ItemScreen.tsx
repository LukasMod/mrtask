import React from 'react';
import {ScrollView, Text} from 'react-native';

export const ItemScreen = () => {
  return (
    <ScrollView style={$container}>
      <Text>ItemScreen</Text>
    </ScrollView>
  );
};

const $container = {
  flex: 1,
};
