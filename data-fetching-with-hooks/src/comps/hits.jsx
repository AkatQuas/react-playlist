import React, { useState, useEffect } from 'react';
import { getHits } from '../service/hits';

const Hits = () => {
  const [data, setData] = useState({ hits: [] });

  // good
  useEffect(() => {
    getHits().then(res => {
      setData(res);
    });
  }, []);

  // better for reading
  /*
  useEffect(() => {
    const fetchData = async () => {
      const res = await getHits();
      setData(res);
    };
    fetchData();
  }, []);
  */

  // bad
  /*
  useEffect(async () => {
      const res = await getHits();
      setData(res);
  }, [])
  */

  return (
    <ul>
      {
        data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))
      }
    </ul>
  )
};

export default Hits;
