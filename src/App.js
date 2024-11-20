import React from 'react';

import Post from './Post';
import Header from './Header';

const posts = [
  { title: 'Titulo #01', subtitle: 'Subtitle #01', likes: 30 },
  { title: 'Titulo #02', subtitle: 'Subtitle #02', likes: 10 },
  { title: 'Titulo #03', subtitle: 'Subtitle #03', likes: 15 },
  { title: 'Titulo #04', subtitle: 'Subtitle #04', likes: 40 },
];

function App() {
  return (
    <>

      <Header>
        <h2>Posts da Semana</h2>
      </Header>

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  );
}

export default App;