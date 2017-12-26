import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// npm install --save react-router-dom@4.0.0
// npm install --save axios redux-promise

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// class Hello extends React.Component {
//   render() { return <div>Hello!</div>; }
// }

// class Goodbye extends React.Component {
//   render() { return <div>Goodbye!</div>; }
// }

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        {/* Header */}
        <Switch>
          {/* Most Specific First */}
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
        {/* <Route path="/posts/:id" component={PostsShow} /> */}

        {/* <Route path="/hello" component={Hello} /> */}
        {/* <Route path="/goodbye" component={Goodbye} /> */}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
