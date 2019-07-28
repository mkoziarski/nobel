import React, { Component } from 'react';
import style from './SearchBox.module.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    const value = event.target.value
    this.setState({ input: event.target.value });
    onChange(value);
  }

  render() {
    return (
      <div className={style.Search}>
        <input
          type="text"
          className={style.input}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
