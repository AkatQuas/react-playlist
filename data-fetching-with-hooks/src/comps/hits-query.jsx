import React, { useState, useEffect, Fragment } from 'react';
import { getHits } from '../service/hits';

const HitsQuery = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('redux');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    // is this a bug?
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    getHits({ query: search }).then(res => {
      setIsLoading(false);
      setData(res);
    });
  }, [search]);

  return (
    <Fragment>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="button" onClick={() => setSearch(query)} >Search</button>
      {isLoading ? (<div>loading...</div>) : (<ul>
        {
          data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))
        }
      </ul>)}
    </Fragment>
  )
};

export default HitsQuery;
