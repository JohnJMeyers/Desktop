import React, { Component } from 'react';
import '../styles/App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BaseLayout from './BaseLayout';
import CreatePost from './CreatePost';
import Home from './Home';
import PostList from './PostList';
import ShowPost from './ShowPost'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <BaseLayout>
              <Switch>
                <Route path="/create" component={CreatePost} />
                <Route path="/show/:id" component={ShowPost}/>
                <Route path="/show" component={PostList} />
                <Route path="/" component={Home} />
              </Switch>
            </BaseLayout>
        </BrowserRouter>
    );
  }
}

export default App;
