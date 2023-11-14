import React from 'react';
import {HomeScreen, ItemScreen, PostScreen, AddPostScreen} from '../screens';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <Text onPress={() => navigation.navigate('AddPostScreen')}>
              Add post
            </Text>
          ),
        })}
      />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
    </Stack.Navigator>
  );
};
