import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';



// use the key requested by myself
// connect to imdb api
const API_URL = "http://www.omdbapi.com?apikey=449d0896";

// take an example for data stretch in return div. now remove this part.


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // log to check data output
        setMovies(data.Search)
    }


    useEffect(() => {
        searchMovies('Spiderman')
    }, [])

    return (
        <div className='app'>
            <h1>Movie2See</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img
                    src={SearchIcon}
                    alt='search icon'
                    onClick={() => searchMovies(searchTerm)} />
            </div>


            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    )
                    : (
                        <div className='empty'>
                            <h2>No movies found.</h2>
                        </div>
                    )
            }




        </div>
    )
};

export default App;