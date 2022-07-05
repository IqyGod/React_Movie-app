import React from 'react';
import MovieCard from './MovieCard';
import './style.css';
import SearchIcon from './search.svg';



// use the key requested by myself
// connect to imdb api
const API_URL = "https://www.omdbapi.com?apikey=449d0896";


export default function App() {

    // set up state
    const [movies, setMovies] = React.useState([]);

    const [searchTerm, setSearchTerm] = React.useState({
        searchInput: ""
    });


    // useEffect function --> console.log(data.Search) to fetch the info
    React.useEffect(() => {
        searchMovies('CSI')
    }, [])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // update state through setState
        setMovies(data.Search)
        //console.log(data.Search)
    }


    // event listener
    function Toggle(event) {
        const { name, value } = event.target
        setSearchTerm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }



    const cards = movies.map(item => {
        return (
            <MovieCard
                key={item.imdbID}
                {...item}
            />
        )
    })



    return (
        <div className='app'>
            <h1>Movie2See</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm.searchInput}
                    name="searchInput"
                    onChange={Toggle} />
                <img
                    src={SearchIcon}
                    alt='search icon'
                    onClick={() => searchMovies(searchTerm.searchInput)}
                />

            </div>


            {
                movies.length > 0
                    ? (
                        <div className='container'>
                            {cards}
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
}

