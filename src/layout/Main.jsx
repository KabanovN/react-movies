import {Component} from 'react';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import SearchPanel from '../components/SearchPanel';

class Main extends Component {
    state = {
        movies: [],
        search: '',
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=cb49d2c&s=matrix`)
        .then(res => res.json())
        .then(data => this.setState({movies: data.Search}))
    }

    updateSearch = (name) => {
        fetch(`http://www.omdbapi.com/?apikey=cb49d2c&s=${name}`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() { 
        const {movies} = this.state;   
        return(
            <main className="container content">
                <SearchPanel updateSearch={this.updateSearch}/>
                {movies.length ? <MoviesList movies={movies}/> : <Preloader />}
            </main>
        )
    }
}

export default Main;