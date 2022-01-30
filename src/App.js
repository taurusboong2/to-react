import React from 'react';
import { Route } from 'react-router-dom';
import './reset.css';
import './App.scss';
import Article from './Article';
import ArticleCreate from './ArticleCreate';
import ArticleDetail from './ArticleDetail';
import ArticleUpdate from './ArticleUpdate';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={Article} />
      <Route path="/create" component={ArticleCreate} />
      <Route path="/detail/:id" component={ArticleDetail} />
      <Route path="/update/:id" component={ArticleUpdate} />
    </div>
  );
}

export default App;
