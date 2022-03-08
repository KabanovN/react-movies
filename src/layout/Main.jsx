import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import SearchPanel from '../components/SearchPanel';
import Filter from '../components/Filter';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState('all');
    const [loading, setLoading] = useState(true);

    const updateSearch = (name) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
            });
    };

    const filterItems = (items, filter) => {
        switch (filter) {
            case 'movie':
                return items.filter((item) => item.Type === 'movie');
            case 'series':
                return items.filter((item) => item.Type === 'series');
            case 'game':
                return items.filter((item) => item.Type === 'game');
            default:
                return items;
        }
    };

    const updateFilter = (filters) => {
        setFilters(filters);
    };

    const content = filterItems(movies, filters);

    useEffect(() => updateSearch('matrix'), []);

    return (
        <main className='container content'>
            <SearchPanel updateSearch={updateSearch} />
            <Filter filter={updateFilter} />
            {loading ? <Preloader /> : <MoviesList movies={content} />}
        </main>
    );
};

export default Main;
