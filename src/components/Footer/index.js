import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = ({ author, title }) => (
  <div id="footer">
    <div className="container">
      <div className="row py-3">
        <div className="col">
          <ul>
            <li className="title-footer">Mapa de Sitio</li>
            <li> Lorem Ipsum</li>
            <li> Lorem Ipsum</li>
            <li> Lorem Ipsum</li>
            <li> Lorem Ipsum</li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <li className="title-footer">Stuff</li>
            <li> Lorem Ipsum</li>
            <li> Lorem Ipsum</li>
            <li> Lorem Ipsum</li>
            <li> Lorem Ipsum</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="title-footer">Social Media</li>
            <li>
              <a href="">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* <p>
        {title}
        <Link to="/profile/">
          <br />

        </Link>
      </p> */}
  </div>
)

export default Footer
