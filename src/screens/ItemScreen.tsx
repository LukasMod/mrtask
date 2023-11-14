import React, {useCallback, useEffect} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';
import {PostItem} from '../components';
import {usePostStore} from '../store';
import {colors, spacing} from '../theme';
import {Post} from '../types';

const ItemSeparatorComponent = () => <View style={$separator} />;
const keyExtractor = (item: Post) => item.id;

export const ItemScreen = () => {
  const {posts, getPosts} = usePostStore();

  useEffect(() => {
    getPosts();
  }, []);

  const renderItem = useCallback(({item}: {item: Post}) => {
    return <PostItem post={item} />;
  }, []);

  return (
    <View style={$container}>
      <FlatList
        contentContainerStyle={$contentContainerStyle}
        data={posts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

const $container: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: colors.background,
};
const $contentContainerStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: spacing.md,
};

const $separator: StyleProp<ViewStyle> = {
  height: 1,
  backgroundColor: colors.border,
};
