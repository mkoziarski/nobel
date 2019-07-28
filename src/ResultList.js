import React, { Component } from 'react';
import { map } from 'lodash';
import style from './ResultList.module.css';

class ResultList extends Component {
  render() {
    const { laureates = [] } = this.props;

    return (
      <div>
        {laureates.length === 0 &&
          <div className={style.empty}>No results</div>
        }
        {map(laureates, (laureate) => (
          <div className={style.laureate} key={laureate.id}>
            <img className={style.image} src={laureate.photo_url} alt={`${laureate.firstname} ${laureate.surname}`} />
            <div className={style.info}>
              <h1 className={style.nameHeading}>{laureate.firstname} {laureate.surname}</h1>
              category: {laureate['Prize Category']}<br />
              year: {laureate.year}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultList;
