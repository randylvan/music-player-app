import React from 'react';

const Nav = () => {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
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
      </div>
    )
}

export default Nav;