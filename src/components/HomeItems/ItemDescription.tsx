import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors, spacing} from '../../theme';
import {HOME_ITEM_HEIGHT} from '../../constants/dimensions';

interface ItemDescriptionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onPress: () => void;
}

export const ItemDescription = ({
  title,
  subtitle,
  description,
  buttonText,
  onPress,
}: ItemDescriptionProps) => {
  return (
    <View style={$container}>
      <Text style={$title}>{title.toUpperCase()}</Text>
      <Text style={$subtitle}>{subtitle.toUpperCase()}</Text>
      <Text style={$description}>{description}</Text>
      <TouchableOpacity onPress={onPress} style={$buttonContainer}>
        <Text style={$buttonText}>{buttonText.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const $container: StyleProp<ViewStyle> = {
  alignItems: 'center',
  padding: spacing.xl,
  minHeight: HOME_ITEM_HEIGHT,
};
const $title: StyleProp<TextStyle> = {
  color: colors.text,
  fontSize: 28,
  fontWeight: '700',
  textAlign: 'center',
};
const $subtitle: StyleProp<TextStyle> = {
  color: colors.tint,
  fontSize: 16,
  fontWeight: '700',
  textAlign: 'center',
};
const $description: StyleProp<TextStyle> = {
  color: colors.text,
  fontSize: 12,
  textAlign: 'center',
  marginTop: spacing.md,
};
const $buttonContainer: StyleProp<ViewStyle> = {
  borderWidth: 2,
  borderColor: colors.tint,
  padding: spacing.xs,
  marginTop: spacing.md,
  borderRadius: 4,
};
const $buttonText: StyleProp<TextStyle> = {
  color: colors.tint,
  fontSize: 16,
  fontWeight: '700',
};
