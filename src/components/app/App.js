import React from 'react';
import './App.css';
import Mainpage from '../mainPage/Mainpage'
import Details from '../details/Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




class App extends React.Component {


  render(){
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Mainpage} />
            <Route exact path='/:showId' component={Details} />
          </Switch>
      </Router>
    )
    }
  }
export default App;
