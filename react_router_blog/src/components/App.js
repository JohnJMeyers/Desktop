import React, { Component } from 'react';
import '../styles/App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BaseLayout from './BaseLayout';
import CreatePost from './CreatePost';
import PostList from './PostList';
import ShowPost from './ShowPost';
import ShowPostId from './ShowPost';
import data from './data'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <BaseLayout>
              <Switch>
                <Route path="/create" component={CreatePost} />
                <Route path="/show/:id" component={data}/>
                <Route path="/show" component={ShowPost} />
                <Route path="/" component={PostList} />
              </Switch>
            </BaseLayout>
        </BrowserRouter>
    );
  }
}

export default App;
