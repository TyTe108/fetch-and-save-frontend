import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      await axios.get('/fetch-posts');
      getAllPosts();
    } catch (error) {
      console.error('Error fetching and saving posts', error);
    }
  };

  const getAllPosts = async () => {
    try {
      const response = await axios.get('/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  const deletePosts = async () => {
    try {
      await axios.delete('/delete-posts');
      setPosts([]);
    } catch (error) {
      console.error('Error deleting posts', error);
    }
  };

  return (
    <div className="container">
      <h1>Fetch and Save Posts</h1>
      <div className="button-container">
        <button onClick={fetchPosts}>Fetch and Save Posts</button>
        <button onClick={deletePosts}>Delete All Posts</button>
      </div>
      {posts.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
