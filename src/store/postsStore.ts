import {create} from 'zustand';
import {addPost, deletePost, getPosts} from '../services';
import {Post} from '../types';

interface PostState {
  posts: Post[];
  getPosts: () => Promise<void>;
  addPost: (postData: Post) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
}

export const usePostStore = create<PostState>()(set => ({
  posts: [],
  getPosts: async () => {
    const newPosts = await getPosts();
    set({posts: newPosts});
  },
  addPost: async (postData: Post) => {
    const newPost = await addPost(postData);
    if (newPost) {
      set(state => ({posts: [...state.posts, newPost]}));
    }
  },
  deletePost: async (postId: string) => {
    const success = await deletePost(postId);
    if (success) {
      set(state => ({posts: state.posts.filter(post => post.id !== postId)}));
    }
  },
}));
