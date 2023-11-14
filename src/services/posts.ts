import axios from 'axios';
import {Post} from '../types';

//FIXME: json-server works with current IP
const baseURL = 'http://192.168.55.103:3005';
const apiConfig = {
  baseURL,
  headers: {
    'x-api-key': 'thisisapikey',
  },
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get('/posts', apiConfig);
    const posts: Post[] = response.data;
    return posts;
  } catch (error) {
    console.log('[ERROR] getPosts', error);
    return [];
  }
};

export const deletePost = async (postId: string): Promise<boolean> => {
  try {
    await axios.delete(`/posts/${postId}`, apiConfig);
    return true;
  } catch (error) {
    console.log('[ERROR] deletePost', error);
    return false;
  }
};

export const addPost = async (postData: Post): Promise<Post | null> => {
  try {
    const response = await axios.post('/posts', postData, apiConfig);
    const newPost: Post = response.data;
    return newPost;
  } catch (error) {
    console.log('[ERROR] addPost', error);
    return null;
  }
};
