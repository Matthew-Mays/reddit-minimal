import React from 'react';
import redditLogo from '../../images/reddit-logo.png';
import './header.css';
import { SearchBar } from '../../features/SearchBar/SearchBar';

export const Header = () => {
    return (
        <header className="header">
            <div className='header__logo-container'>
                <img className='header__logo' src={redditLogo} alt='reddit logo' />
                <h3 className='header-title'>RedditMinimal</h3>
            </div>
            <SearchBar />
      </header>
    )
}