import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {PostScreenNavProp, PostScreenRouteProp} from '../navigation/types';
import {usePostStore} from '../store';
import {colors, spacing} from '../theme';

export const PostScreen = () => {
  const {params} = useRoute<PostScreenRouteProp>();
  const navigation = useNavigation<PostScreenNavProp>();

  const post = usePostStore(state => {
    return state.posts.find(item => item.id === params.id);
  });
  const {deletePost} = usePostStore();

  const onDeletePost = () => {
    if (post?.id) {
      deletePost(post.id);
      navigation.goBack();
    }
  };

  if (!post) {
    return null;
  }

  return (
    <View style={$container}>
      <Text style={$title}>{post?.title}</Text>
      <Text style={$description}>{post?.description}</Text>
      <TouchableOpacity onPress={onDeletePost} style={$deleteButton}>
        <Text style={$deleteButtonText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
};

const $container: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: colors.background,
  padding: spacing.md,
};
const $title: StyleProp<TextStyle> = {
  color: colors.tint,
  fontSize: 24,
  marginBottom: spacing.sm,
};
const $description: StyleProp<TextStyle> = {
  color: colors.text,
  fontSize: 16,
};
const $deleteButton: StyleProp<TextStyle> = {
  marginTop: spacing.xl,
  fontSize: 16,
};
const $deleteButtonText: StyleProp<TextStyle> = {
  color: colors.error,
  fontSize: 16,
};
