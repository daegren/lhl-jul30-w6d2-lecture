import React from 'react';
import Post from './Post.jsx';

// Functional component to render out all of our posts
// Takes a single prop: posts
const PostList = ({ posts }) => (
  <div className="post-list">
    <ul>{posts.map(p => <Post key={p.id} post={p} />)}</ul>
  </div>
);
export default PostList;
