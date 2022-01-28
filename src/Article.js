import React, { useState } from 'react';
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
  const [result, setResult] = useState(``);
  getData().then(res => {
    const dataArr = res.data.data;
    setResult(
      dataArr.map(e => {
        const id = e.id;
        return `
        <li>
          <a href="article_detail.html?id=${id}">
              <h2>${e.attributes.title}</h2>
              <p>${e.attributes.createdAt}</p>
          </a>
        </li>
      `;
      })
    );
    console.log(result);
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
          <ul id="list">{result}</ul>
        </div>
      </main>
    </div>
  );
};

export default Article;
