import { Component } from 'react';

class Filter extends Component {
    state = {
        filters: 'all',
    };

    handleFilter = (evt) => {
        this.setState({ filters: evt.target.getAttribute('data-filter') });
        this.props.filter(evt.target.getAttribute('data-filter'));
    };

    render() {
        const elemsArray = [
            { title: 'All', filters: 'all', id: 'r1' },
            { title: 'Movies', filters: 'movie', id: 'r2' },
            { title: 'Serials', filters: 'series', id: 'r3' },
            { title: 'Games', filters: 'game', id: 'r4' },
        ];

        const elems = elemsArray.map((item) => {
            return (
                <label key={item.id}>
                    <input
                        className='with-gap'
                        name='group1'
                        type='radio'
                        data-filter={item.filters}
                        onChange={this.handleFilter}
                        checked={this.state.filters === item.filters}
                    />
                    <span>{item.title}</span>
                </label>
            );
        });

        return <p>{elems}</p>;
    }
}

export default Filter;
