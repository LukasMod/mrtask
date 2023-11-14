import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {HomeScreenNavProp} from '../navigation/types';

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>();

  return (
    <ScrollView style={$container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate('ItemScreen');
        }}
        title="ItemScreen"
      />
    </ScrollView>
  );
};

const $container = {
  flex: 1,
};
