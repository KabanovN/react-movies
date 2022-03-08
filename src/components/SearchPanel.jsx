import { Component } from 'react';

class SearchPanel extends Component {
    state = {
        search: '',
    };

    handleSearchInput = (evt) => this.setState({ search: evt.target.value });

    handleKey = (evt) => {
        if (evt.key === 'Enter') {
            this.props.search(this.state.search);
        }
    };

    render() {
        return (
            <div className='input-field col s12'>
                <input
                    className='validate'
                    type='search'
                    placeholder='Search'
                    value={this.state.search}
                    onChange={this.handleSearchInput}
                    onKeyDown={this.handleKey}
                />
            </div>
        );
    }
}

export default SearchPanel;
