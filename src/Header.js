import React from 'react';
import redditLogo from './images/reddit-logo.png';
import './header.css';
export const Header = () => {
    return (
        <header className="header">
            <div className='logo-container'>
                <img className='header-logo' src={redditLogo} alt='reddit logo' />
                <h3 className='header-title'>RedditMinimal</h3>
            </div>
      </header>
    )
}