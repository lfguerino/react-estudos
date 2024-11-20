import React from 'react';

import Post from './Post';

function App() {
  return (
    <>
      <h1>LFGuerino Blog</h1>
      <h2>Posts da Semana</h2>
      <hr />

      <Post
        post={{
          title: 'Titulo 01',
          subtitle: 'Subtitulo 01'
        }}
      />

      <Post
        post={{
          title: 'Titulo 02',
          subtitle: 'Subtitulo 02'
        }}
      />

      <Post
        post={{
          title: 'Titulo 03',
          subtitle: 'Subtitulo 03'
        }}
      />

    </>
  );
}

export default App;