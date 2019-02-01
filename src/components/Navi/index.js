import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark fixed-top py-3"
        id="bbold-nav"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link px-5" href="#">
              About Us <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link px-5" href="#">
              Services
            </a>
            <a className="nav-item nav-link px-5" href="#">
              Our Work
            </a>
            <a className="nav-item nav-link px-5" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi
