import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// BrowserRouter : 브라우저 히스토리를 이용하여 구현한 라이브러리.
// 'BrowserRouter를 불러와서 Router라고 부르겠다'라는 의미.

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import User from './routes/User';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />  {/* exact를 넣어줘야 독립적으로 나온다. */}
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
        </div>
      </div>
    </Router>
  );
};

export default App;