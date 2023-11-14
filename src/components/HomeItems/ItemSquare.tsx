import React from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import {HOME_ITEM_HEIGHT, SCREEN_WIDTH} from '../../constants';
import {colors} from '../../theme';
import {ItemBackgroundImage} from './ItemBackgroundImage';

// TODO: add props
export const ItemSquare = () => {
  return (
    <View style={$container}>
      <ItemBackgroundImage
        imageUrl="https://images.unsplash.com/photo-1699002159193-68fd17410f46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        containerStyle={$item}
      />
      <FastImage
        source={{
          uri: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={$image}
      />
      <FastImage
        source={{
          uri: 'https://images.unsplash.com/photo-1699562007392-4bbcd2f4e759?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={$image}
      />
      <ItemBackgroundImage
        imageUrl="https://images.unsplash.com/photo-1699002159193-68fd17410f46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        containerStyle={$item}
        title="Sed ut perspiciatis, unde omnis iste natus error sit "
        titleStyle={$title}
      />
    </View>
  );
};

const $container: StyleProp<ViewStyle> = {
  height: HOME_ITEM_HEIGHT,
  width: SCREEN_WIDTH,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
};
const $item: StyleProp<ViewStyle> = {
  height: HOME_ITEM_HEIGHT / 2,
  width: SCREEN_WIDTH / 2,
  justifyContent: 'center',
  alignItems: 'center',
};
const $image: StyleProp<ImageStyle> = {
  height: HOME_ITEM_HEIGHT / 2,
  width: SCREEN_WIDTH / 2,
};

const $title: StyleProp<TextStyle> = {
  position: 'absolute',
  color: colors.text,
  fontSize: 12,
  fontWeight: '700',
  textAlign: 'center',
};
