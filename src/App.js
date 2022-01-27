import React from 'react';
import { Route } from 'react-router-dom';
import './reset.css';
import './App.scss';
import Article from './Article';
import ArticleCreate from './ArticleCreate';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={Article} />
      <Route path="/create" component={ArticleCreate} />
    </div>
  );
}

export default App;
