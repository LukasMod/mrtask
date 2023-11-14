import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  ItemScreen: undefined;
};

export type ItemScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'ItemScreen'
>;
export type HomeScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
