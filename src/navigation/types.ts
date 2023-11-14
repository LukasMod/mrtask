import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  ItemScreen: undefined;
  PostScreen: {id: string};
  AddPostScreen: undefined;
};

export type ItemScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'ItemScreen'
>;
export type HomeScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
export type PostScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'PostScreen'
>;
export type PostScreenRouteProp = RouteProp<RootStackParamList, 'PostScreen'>;
