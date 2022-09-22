import './App.css';
import React from 'react';
import redditLogo from './images/reddit-logo.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-container'>
          <img className='header-logo' src={redditLogo} alt='reddit logo' />
          <h3 className='header-title'>RedditMinimal</h3>
        </div>
      </header>
      <section className='post-container'></section>
      <section className='subreddit-container'></section>
    </div>
  );
}

export default App;
