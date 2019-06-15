
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './index.css';
import App from './App';
import About from './components/About';
import AddClothForm from './components/AddClothForm';
import Converter from './components/Converter';

ReactDOM.render(
  <Router>
    <div>
      <Link to={'/'}>Main page</Link><br />
      <Link to={'/addCloth'}>Add cloth</Link><br />
      {/* <Link to={'/updateCloth'}>Update cloth</Link><br/> */}
      <Link to={'/converter'}>Convert</Link><br />
      <Link to={'/about'}>About page</Link>
      <hr />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/addCloth' component={AddClothForm} />
        {/* <Route path='/updateCloth' component={UpddateClothForm} /> */}
        <Route path='/converter' component={Converter} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'));
