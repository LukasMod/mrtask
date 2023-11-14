import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {usePostStore} from '../store';
import {colors, spacing} from '../theme';
import uuid from 'react-native-uuid';

export const AddPostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addPost = usePostStore(state => state.addPost);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (title && description) {
      const newPost = {
        title,
        description,
        createdAt: uuid.v4().toString(),
        id: Math.random().toString(),
      };
      await addPost(newPost);
      setTitle('');
      setDescription('');
      navigation.goBack();
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Add Post" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
});
