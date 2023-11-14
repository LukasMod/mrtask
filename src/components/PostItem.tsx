import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {ItemScreenNavProp} from '../navigation/types';
import {usePostStore} from '../store';
import {colors, hitslop, spacing} from '../theme';
import {Post} from '../types';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({post}: PostItemProps) => {
  const navigation = useNavigation<ItemScreenNavProp>();
  const {deletePost} = usePostStore();

  const onPressPost = () => {
    navigation.navigate('PostScreen', {id: post.id});
  };

  const onPressDelete = () => {
    deletePost(post.id);
  };

  return (
    <TouchableOpacity style={$container} onPress={onPressPost}>
      <Text style={$titleText}>{post.title}</Text>
      <TouchableOpacity
        style={$deleteButton}
        hitSlop={hitslop.medium}
        onPress={onPressDelete}>
        <Text style={$deleteButtonText}>DELETE</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const $container: StyleProp<ViewStyle> = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const $deleteButton: StyleProp<ViewStyle> = {};
const $titleText: StyleProp<TextStyle> = {
  color: colors.text,
  fontSize: 16,
};
const $deleteButtonText: StyleProp<TextStyle> = {
  color: colors.error,
  fontSize: 16,
};
