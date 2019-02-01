import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/Navi'
import Footer from 'components/Footer'
import { siteMetadata } from '../../../gatsby-config'
import logo from '../../../static/img/logo.png'
import iconDigital from '../../../static/img/Icon_1_Red.png'
import iconAnalytics from '../../../static/img/Icon_2_Red.png'
import iconSocial from '../../../static/img/Icon_3_Red.png'
import iconCreative from '../../../static/img/Icon_4_Red.png'
import iconAudiovisuals from '../../../static/img/Icon_5_Red.png'
import iconPhotography from '../../../static/img/Icon_6_Red.png'
import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'font-awesome/css/font-awesome.css'

import Plx from 'react-plx'
// import animateScrollTo from 'animated-scroll-to';

const parallaxBg = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 'rgba(0,0,0,0)',
        endValue: 'rgba(0,0,0,1)',
        property: 'backgroundColor',
      },
    ],
  },
]

const textData = [
  {
    start: '#about',
    duration: '40vh',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
]

const servicesAnimateBtn = [
  {
    start: '#services',
    end: '#work',
    properties: [
      {
        startValue: 0,
        endValue: 720,
        property: 'rotate',
      },
    ],
  },
]

// const brandsAnimation = [
//   {

//   }
// ]

const styleBg = {
  backgroundColor: 'rgba(0,0,0,1)',
}

class Layout extends React.Component {
  constructor(props) {
    super(props)

    // line above is an equivalent to this.increaseQty = this.increaseQty.bind(this);
  }

  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  state = {
    activeClass: '',
  }

  render() {
    return (
      <div>
        <Plx parallaxData={parallaxBg}>
          <div className={`header ${this.state.activeClass}`}>
            <Navi title={siteMetadata.title} {...this.props} />
            <img src={logo} alt="logo bbold" className="title" />
          </div>
        </Plx>
        <div id="container-wrapper">
          <div id="about">
            <Plx className="StickyText" parallaxData={textData}>
              <div className="container">
                <h2>WHO ARE WE?</h2>
                <p>
                  The game, the playfulness; the challenge. Having the BOLDness
                  to face new projects and clients, friends, that different than
                  providing them with a service we discovered that we could help
                  them out. We believe in finding the talent of every individual
                  and making it rise.
                </p>
                <p>
                  BBOLD wants and seeks to rescue the essence and unique
                  potential of each of our projects. The value of generating an
                  understanding relationship with our customers, creating a
                  team, and generating a long-term bond where we give value to
                  the process and the alliances we believe in.
                </p>
                <p>"If you're good at something, don’t do it for free."</p>
              </div>
            </Plx>
          </div>
          <div id="services">
            <div className="container">
              <h2>
                WHAT CAN WE DO <br /> FOR YOU?
              </h2>
              <div className="row">
                <div className="col">
                  <Plx parallaxData={servicesAnimateBtn}>
                    <img
                      src={iconSocial}
                      alt=" Customized Digital and Social Media Strafegy"
                      className="icon-services"
                    />
                  </Plx>
                  <h5>Customized Digital &amp; Social Media Strategy</h5>
                </div>
                <div className="col">
                  <Plx parallaxData={servicesAnimateBtn}>
                    <img
                      src={iconAnalytics}
                      alt="Analytics"
                      className="icon-services"
                    />
                  </Plx>
                  <h5>Analytics</h5>
                </div>
                <div className="col">
                  <Plx parallaxData={servicesAnimateBtn}>
                    <img
                      src={iconSocial}
                      alt="Social Media Management"
                      className="icon-services"
                    />
                  </Plx>
                  <h5>Social Media Management</h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Plx parallaxData={servicesAnimateBtn}>
                    <img
                      src={iconCreative}
                      alt="Creative Design"
                      className="icon-services"
                    />
                  </Plx>
                  <h5>Creative Design</h5>
                </div>
                <div className="col">
                  <Plx parallaxData={servicesAnimateBtn}>
                    <img
                      src={iconAudiovisuals}
                      alt="Audivisuals"
                      className="icon-services"
                    />
                  </Plx>
                  <h5>Audiovisuals</h5>
                </div>
                <div className="col">
                  <Plx parallaxData={servicesAnimateBtn}>
                    <img
                      src={iconPhotography}
                      alt="Photography"
                      className="icon-services"
                    />
                  </Plx>
                  <h5>Photography</h5>
                </div>
              </div>
              <a
                id="contact-btn"
                href="/#contacts"
                onClick={() => this.handleScrollTop()}
              >
                CONTACT US!
              </a>
            </div>
          </div>
          <div id="work">
            <div className="container">
              <h2>
                WHO HAVE WORKED <br /> WITH US?
              </h2>
              <div className="row work-row">
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
              </div>
              <div className="row work-row">
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
                <div className="col">
                  <img src={logo} alt="" className="work-img" />
                </div>
              </div>
            </div>
          </div>
          <div id="contact">
            <div className="container">
              <h2>LET'S TALK!</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyInput">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyInput"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="commentArea">Email address</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  />
                  <div clasName="form-group">
                    <button
                      id="btn-submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer title={siteMetadata.title} />
      </div>
    )
  }
}

export default Layout
