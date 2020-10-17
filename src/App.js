import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import './App.css';
import HomePage from './pages/homepage/homepage.component';

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

const TopicsList = props => {
  console.log(props)
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/11`}>Topics 11</Link><br />
      <Link to={`${props.match.url}/12`}>Topics 12</Link><br />
      <Link to={`${props.match.url}/13`}>Topics 13</Link>
    </div>
  )
};

const TopicDetail = props => {
  console.log(props)
  return (
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  )
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/topics/:topicId' component={TopicDetail} />
        <Route exact path='/topics' component={TopicsList} />
      </Switch>
    </div>
  );
}

export default App;