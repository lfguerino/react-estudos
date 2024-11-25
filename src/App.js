import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Titulo #01', subtitle: 'Subtitle #01', likes: 30, read: false },
    { id: Math.random(), title: 'Titulo #02', subtitle: 'Subtitle #02', likes: 10, read: true },
    { id: Math.random(), title: 'Titulo #03', subtitle: 'Subtitle #03', likes: 15, read: false },
    { id: Math.random(), title: 'Titulo #04', subtitle: 'Subtitle #04', likes: 40, read: true },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Titulo #0${prevState.length + 1}`,
        subtitle: `Subtitle #0${prevState.length + 1}`,
        likes: 30,
        read: false,
      }
    ])
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.filter(post => post.id !== postId))
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>Posts da Semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;