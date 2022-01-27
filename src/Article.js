import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

async function getData() {
  const url = 'http://localhost:1337/api/articles';
  try {
    const response = await axios.get(url);
    console.log(response);
    console.log(response.data.data[0]);
  } catch (error) {
    console.log(error);
  }
}

const Article = () => {
  getData();
  return (
    <div>
      <header>
        <h1>Article</h1>
      </header>
      <main>
        <div id="create_box">
          <Link to="/create">Create</Link>
          <Link to="/detail">detail</Link>
          <Link to="/update">update</Link>
        </div>
        <div id="list_wrap">
          {/* <ul id="list">
            {users.map(user => (
              <li key={user.id}>
                {user.data.title} ({user.des})
              </li>
            ))}
          </ul> */}
        </div>
      </main>
    </div>
  );
};

export default Article;
