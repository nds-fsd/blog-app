import React, { useState } from 'react';

const Form = ({ savePost }) => {
  const [titleValue, setTitleValue] = useState();
  const [contentValue, setContentValue] = useState();

  return (
    <>
      <input name="title" onChange={e => setTitleValue(e.target.value)} type="text" placeholder="Title" />
      <textarea name="content" onChange={e => setContentValue(e.target.value)} rows={10}></textarea>
      <button type="submit" onClick={() => savePost({ title: titleValue, content: contentValue, date: new Date()})}>Enviar</button>
    </>
  );
};

export default Form;
