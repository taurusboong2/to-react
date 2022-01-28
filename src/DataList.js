import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DataList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(null);
        setError(null);
        setLoading(true);
        const response = await axios.get('http://localhost:1337/api/articles');
        setData(response.data.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(data);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return (
    <ul className="list">
      {data.map(e => (
        <li key={e.id}>
          <Link to="/detail" />
          <h2>{e.attributes.title}</h2>
          <p>{e.attributes.createdAt}</p>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
