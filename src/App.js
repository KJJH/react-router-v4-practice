import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// BrowserRouter : 브라우저 히스토리를 이용하여 구현한 라이브러리.
// 'BrowserRouter를 불러와서 Router라고 부르겠다'라는 의미.

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Search from './routes/Search';
import Login from './routes/Login';
import MyPage from './routes/MyPage';

import NotFound from './routes/NotFound';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />  {/* exact를 넣어줘야 독립적으로 나온다. */}
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/search" component={Search} />
            <Route path="/me" component={MyPage} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;