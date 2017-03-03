import React from 'react';
import { Link } from 'react-router';
import Tweets from '../components/Tweets';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  links = () => {
    return [
      { name: 'Home', path: '/' },
    ].map( (link, i) => {
      let active = this.props.location.pathname === link.path ? 'active' : '';
      return (
        <li className={active}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><img className="image" src="../../config/public/twitter.png"></img></a>
            <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              { this.links() }
            </ul>
            <ul className="side-nav" id="mobile">
              { this.links() }
            </ul>
          </div>
        </nav>
        {this.props.children}
        <Tweets />
      </div>
    );
  }
}

export default App;
