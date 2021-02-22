import React, { useState } from 'react';
import Form from './components/form';
import List from './components/list';
import { handleOnDelete, handleOnSave } from './form.utils';

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <Form savePost={postInfo => handleOnSave(postInfo, posts, setPosts)} />
      <List posts={posts} deletePost={id => handleOnDelete(id, setPosts, posts)} />
    </div>
  );
}

export default App;
