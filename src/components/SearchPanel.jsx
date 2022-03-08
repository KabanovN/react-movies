import { useState } from 'react';

const SearchPanel = (props) => {
    const { updateSearch } = props;

    const [search, setSearch] = useState('');

    const handleSearchInput = (evt) => setSearch(evt.target.value);

    const handleKey = (evt) => {
        if (evt.key === 'Enter') {
            updateSearch(search);
        }
    };

    return (
        <div className='input-field col s12'>
            <input
                className='validate'
                type='search'
                placeholder='Search'
                value={search}
                onChange={handleSearchInput}
                onKeyDown={handleKey}
            />
        </div>
    );
};

export default SearchPanel;
