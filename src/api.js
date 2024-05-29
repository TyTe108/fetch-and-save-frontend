import axios from 'axios';

const API_URL = 'https://fetch-and-save-d8b0e2b25bdc.herokuapp.com';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/fetch-posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error getting posts:', error);
    throw error;
  }
};

export const deletePosts = async () => {
  try {
    await axios.delete(`${API_URL}/delete-posts`);
  } catch (error) {
    console.error('Error deleting posts:', error);
    throw error;
  }
};
