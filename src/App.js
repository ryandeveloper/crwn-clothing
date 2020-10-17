import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const HomePage = props => {
//   console.log(props)
//   return (
//     <div>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       <Link to='/topics'>Topics</Link>
//       <h1>HOMEPAGE</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;