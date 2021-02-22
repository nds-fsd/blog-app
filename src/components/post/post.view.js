import React from 'react';

const Post = ({ data: { id, title, content, date }, deletePost }) => (
  <>
    <p>Title: {title}</p>
    <p>Content: {content}</p>
    <p>Date: {date.toString()}</p>
    <button onClick={() => deletePost(id)}>Borrar</button>
  </>
);

export default Post;
