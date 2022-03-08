import { Component } from 'react';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import SearchPanel from '../components/SearchPanel';
import Filter from '../components/Filter';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        filters: 'all',
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=mortal`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    updateSearch = (name) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    filterItems = (items, filter) => {
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

    updateFilter = (filters) => {
        this.setState({ filters });
    };

    render() {
        const { movies, loading, filters } = this.state;

        const content = this.filterItems(movies, filters);

        return (
            <main className='container content'>
                <SearchPanel search={this.updateSearch} />
                <Filter filter={this.updateFilter} />
                {loading ? <Preloader /> : <MoviesList movies={content} />}
            </main>
        );
    }
}

export default Main;
