import React, { useState } from 'react';
import { fetchPosts, getPosts, deletePosts } from './api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const handleFetchPosts = async () => {
    try {
      await fetchPosts();
      const posts = await getPosts();
      setPosts(posts);
    } catch (error) {
      console.error('Error fetching and saving posts:', error);
    }
  };

  const handleDeletePosts = async () => {
    try {
      await deletePosts();
      setPosts([]);
    } catch (error) {
      console.error('Error deleting posts:', error);
    }
  };

  return (
    <div className="container">
      <button onClick={handleFetchPosts}>Fetch and Save Posts</button>
      <button onClick={handleDeletePosts}>Delete All Posts</button>
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
    </div>
  );
}

export default App;
