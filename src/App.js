import React, { Component } from 'react';
import { debounce } from 'lodash';
import { extractResults, getQueryUrl } from './nobelApi';
import SearchBox from './SearchBox';
import ResultList from './ResultList';
import style from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], loading: false };
  }

  componentDidMount() {
    this.fetchResults('');
  }

  fetchResults = debounce((value) => {
    this.setState({ loading: true });
    fetch(getQueryUrl(value))
      .then((response) => response.json())
      .then((data) => { this.setState({ results: extractResults(data), loading: false }); })
      .catch(() => { this.setState({ loading: false }); });
  }, 300);

  handleSearchChange = (value) => {
    this.fetchResults(value);
  };

  render() {
    const { results, loading } = this.state;

    return (
      <div className={style.App}>
        <div>
          <SearchBox onChange={this.handleSearchChange} />
        </div>
        <div className={style.loading}>{loading ? 'loading...' : ''}</div>
        <div>
          <ResultList laureates={results} />
        </div>
      </div>
    );
  }
}

export default App;
