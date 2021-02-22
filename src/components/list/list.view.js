import React from 'react';
import Post from '../post';

const List = ({ posts, deletePost }) => (
  <>
    <p>Posts</p>
    {posts.length > 0 ? posts.map(post => (
      <Post key={`post-${post.id}`} data={post} deletePost={deletePost} />
    )) : <p>No hay post</p>}
  </>
);

export default List;
