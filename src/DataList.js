import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const DataList = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get('http://localhost:1337/api/articles');
      dispatch({ type: 'SUCCESS', data: response.data.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
    console.log(`다시 로딩중...`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, data: data, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return (
    <ul className="list">
      <button onClick={fetchData}>다시 불러오기</button>
      {data.map(e => (
        <li key={e.id}>
          <Link to="/detail">
            <h2>{e.attributes.title}</h2>
            <p>{e.attributes.createdAt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
