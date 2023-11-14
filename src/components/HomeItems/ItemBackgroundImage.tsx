import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import {HOME_ITEM_HEIGHT, SCREEN_WIDTH} from '../../constants';
import {colors} from '../../theme';

interface ItemBackgroundImageProps {
  title?: string;
  imageUrl: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export const ItemBackgroundImage = ({
  title,
  imageUrl,
  containerStyle,
  titleStyle,
}: ItemBackgroundImageProps) => {
  return (
    <View style={[$container, containerStyle]}>
      <FastImage
        source={{
          uri: imageUrl,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={$image}
      />
      <Text style={[$title, titleStyle]}>{title?.toUpperCase()}</Text>
    </View>
  );
};

const $container: StyleProp<ViewStyle> = {
  height: HOME_ITEM_HEIGHT,
  width: SCREEN_WIDTH,
  justifyContent: 'center',
  alignItems: 'center',
};
const $image: StyleProp<ImageStyle> = {
  height: '100%',
  width: '100%',
  opacity: 0.4,
};
const $title: StyleProp<TextStyle> = {
  position: 'absolute',
  color: colors.text,
  fontSize: 28,
  fontWeight: '700',
  textAlign: 'center',
};
