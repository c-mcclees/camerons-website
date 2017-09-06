import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <a target="_blank" href="/pdfs/CameronMcCleesResume.pdf" className="nav-link">Resume</a>
        <Link to="/passions" className="nav-link">Passions</Link>
      </nav>
    );
  }
}
