import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

async function getData() {
  const url = 'http://localhost:1337/api/articles';
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const Article = () => {
  getData().then(res => {
    const dataArr = res.data.data;
    console.log(dataArr);
  });

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
          <ul id="list" />
        </div>
      </main>
    </div>
  );
};

export default Article;
