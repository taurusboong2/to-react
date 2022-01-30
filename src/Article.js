import React from 'react';
import { Link } from 'react-router-dom';
import DataList from './DataList';

const Article = () => {
  return (
    <div>
      <header>
        <h1>Article</h1>
      </header>
      <main>
        <div id="create_box">
          <Link to="/create">Create</Link>
        </div>
        <div id="list_wrap">
          <DataList />
        </div>
      </main>
    </div>
  );
};

export default Article;
