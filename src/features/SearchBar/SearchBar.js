import searchGlass from '../../images/search.png';
import './searchBar.css';

export const SearchBar = () => {
    return (
        <div className='searchBar'>
            <form className='searchBar__form'>
                <input type='text' placeholder="Search..." className='searchBar__input' />
                <input type='image' className="searchBar__submit" src={searchGlass} alt="Photo of magnifying glass that submits search" />
            </form>
        </div>
    )
}