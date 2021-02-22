export const handleOnSave = (postInfo, posts, setPosts) => {
  const dataToSave = { ...postInfo, id: posts.length + 1 };
  setPosts([...posts, dataToSave]);
};

export const handleOnDelete = (id, setPosts, posts) => {
  setPosts(posts.filter(post => post.id !== id));
};
