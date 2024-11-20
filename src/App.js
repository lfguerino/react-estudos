import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>

      <Header>
        <h2>Posts da Semana</h2>
      </Header>

      <Post
        likes={20}
        post={{
          title: 'Titulo 01',
          subtitle: 'Subtitulo 01'
        }}
      />

      <Post
        likes={10}
        post={{
          title: 'Titulo 02',
          subtitle: 'Subtitulo 02'
        }}
      />

      <Post
        likes={15}
        post={{
          title: 'Titulo 03',
          subtitle: 'Subtitulo 03'
        }}
      />

    </>
  );
}

export default App;