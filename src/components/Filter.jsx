import { useState } from 'react';

const Filter = (props) => {
    const { filter } = props;
    const [filters, setFilters] = useState('all');

    const handleFilter = (evt) => {
        setFilters(evt.target.getAttribute('data-filter'));
        filter(evt.target.getAttribute('data-filter'));
    };

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
                    onChange={handleFilter}
                    checked={filters === item.filters}
                />
                <span>{item.title}</span>
            </label>
        );
    });

    return <p>{elems}</p>;
};

export default Filter;
