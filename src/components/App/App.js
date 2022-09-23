import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <section className='post-container'></section>
      <section className='subreddit-container'></section>
    </div>
  );
}

export default App;
