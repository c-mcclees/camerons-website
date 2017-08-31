import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Home from '../views/home';
import Passions from '../views/passions';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="main_container">
        <Header />
        <section className="main_content">
          <Route exact path="/" component={Home}/>
          <Route path="/passions" component={Passions}/>
        </section>
      </div>
    );
  }
}
