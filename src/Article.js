import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCreate from './ArticleCreate';

const Article = () => {
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
