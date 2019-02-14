
     
import React, { Component } from "react";
import "./assets/index.css";
import bootstrap from "./assets/bootstrap.png";
import javascript from "./assets/javascript.png";
import css from "./assets/css-logo-1.png"
import django from "./assets/django-logo-negative.png"
import python from "./assets/pythonLogo.png"
import react from "./assets/React-icon.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Nightsky1 from "./assets/img/gabriele.jpg";
//import Nightsky from "./assets/img/timothee.jpg";
// import Infomercial from "../Infomercial/index";

class LandingPage extends Component {
  state = {
    isTop: true
  }

  componentWillUnmount() {
    document.removeEventListener('scroll');
  }

  onScroll = (isTop) => {
    this.setState({ isTop });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }




  render() {
    return (
      <div>
        {/* Navbar */}
        <nav
          className={`navbar navbar-expand-lg fixed-top ${this.state.isTop ? 'navbar-transparent' : 'nothing'}`}
          color-on-scroll={`300`}
        >
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href={"/"}>
                <FontAwesomeIcon icon={["fas", "at"]} className="space" />
                Richard Verdier
              </a>
              <button
                className="navbar-toggler navbar-toggler-right navbar-burger"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* The Hamburger in tablet/mobile view */}
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">

                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Follow me on Twitter"
                    data-placement="bottom"
                    href="https://www.twitter.com"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      className="fa fa-twitter"
                    />
                    <p className="d-lg-none">Twitter</p>
                  </a>
                </li>
              
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Star on GitHub"
                    data-placement="bottom"
                    href="https://github.com/rverdi642"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="fa fa-github"
                    />
                    <p className="d-lg-none">GitHub</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Centered Text */}
        <div className="page-header computer" data-parallax="false">
          <div className="filter" />
          <div className="container">
            <div className="motto text-center">
              <h1>Richard L. Verdier</h1>
              <h3>
                Front-End Web Developer
              </h3>
              <br />

            </div>
          </div>
        </div>
        {/* Let's Talk Product Section */}
        <div className="main">
          <div className="section text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h2 className="title">Discover</h2>
                  <h5 className="description">
                    Pursuing Front-End opportunities
                  </h5>
                  <br />
                  <a href="#paper-kit" className="btn btn-danger btn-round">
                    See Details
                  </a>
                  {/* <Infomercial /> */}
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                {/* Family and friends card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-chat-33" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Title Placeholder</h4>
                      <p className="description">
                        Placeholder
                      </p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
                {/* Intuitive card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-bulb-63" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Title Placeholder</h4>
                      <p>
                      Placeholder
                      </p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
                {/* Promotions card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-email-85" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Title Placeholder</h4>
                      <p>
                      Text Placeholder
                      </p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
                {/* Efficiency card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-watch-time" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Title Placeholder</h4>
                      <p>
                      Text Placeholder
                      </p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Let's talk about us Section */}
          <div className="section section-dark text-center team-3">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto text-center">
                  <h2 className="title">Let's talk about Technology</h2>
                  <h5 className="description">
                    Text Placeholder
                  </h5>
                </div>
              </div>
              <div className="space-top" />
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-profile card-plain">
                    <div className="row">

                      <div className="col-md-5">
                        <div className="card-img-top">
                          <a href="#pablo">
                            {/* <img
                              className="img" */}
                              
                            {/* src={Proj} */}
                               <img src={bootstrap} height="42" width="42" />
                               <img src={javascript} height="42" width="42" />
                               <img src={css} height="42" width="42" />
                               <img src={django} height="42" width="42" />
                               <img src={react} height="42" width="42" />
                               <img src={python} height="42" width="42" />


                              
                            {/* /> */}
                          </a>
                        </div>
                      </div>

                      <div className="col-md-7">
                        <div className="card-body text-left">
                          <h4 className="card-title">Card Title</h4>
                          <h6 className="card-category">
                            Card Description
                          </h6>
                          <p className="card-description">
                            My PlaceHolder
                          </p>
                          <div className="card-footer pull-left">
                            <a
                              href="#pablo"
                              className="btn btn-just-icon btn-link btn-twitter"
                            >
                              <FontAwesomeIcon
                                icon={["fab", "twitter"]}
                                className="fa fa-twitter"
                              />
                            </a>
                            <a
                              href="#pablo"
                              className="btn btn-just-icon btn-link btn-facebook"
                            >
                              <FontAwesomeIcon
                                icon={["fab", "linkedin-in"]}
                                className="fa fa-linkedin"
                              />
                            </a>
                            <a
                              href="#pablo"
                              className="btn btn-just-icon btn-link btn-google"
                            >
                              <FontAwesomeIcon
                                icon={["fab", "google-plus-g"]}
                                className="fa fa-google-plus"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-profile card-plain">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img-top">
                          <a href="#pablo">
                           
                          </a>
                        </div>
                      </div>
                      
              </div>
            </div>
          </div>
          {/* Pricing Section */}
          <div className="project-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto text-center">
                  <h2 className="title">Project Sample</h2>
                  <h5 className="description">
                    View
                  </h5>
                  <br />
                </div>
              </div>
              <div className="space-top" />
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="card card-pricing"
                    data-background="image"
                    //style={{ backgroundImage: `url(${Nightsky})` }}
                  >
                    <div className="card-body">
                      <h6 className="card-category">Free</h6>
                      <h1 className="card-title">
                        <small>data</small>0
                        <small>data</small>
                      </h1>
                      <ul>
                        <li>
                          <b>data</b> data text
                        </li>
                        <li>
                          <b>data</b> data text
                        </li>
                        <li>
                          <b>data</b> data text
                        </li>
                        {/* <li>
                    <b>2</b> Personal Brand
                  </li> */}
                      </ul>
                      <a href="#pablo" className="btn btn-danger btn-round ">
                      data
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card card-pricing"
                    data-background="image"
                    // style={{ backgroundImage: `url(${Nightsky1})` }}
                  >
                    <div className="card-body">
                      <h6 className="card-category">Premium</h6>
                      <h1 className="card-title">
                        <small> data</small>10
                        <small> data</small>
                      </h1>
                      <ul>
                        <li>
                          <b> data</b> data text
                        </li>
                        <li>
                          <b> data</b> data text
                        </li>
                        <li>
                          <b> data</b> data text
                        </li>
                      </ul>
                      <a href="#pablo" className="btn btn-danger btn-round">
                      data
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Us */}
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h2 className="text-center">Keep in touch?</h2>
                  <form className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="nc-icon nc-single-02" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label>Email</label>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="nc-icon nc-email-85" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Tell us your thoughts and feelings..."
                    />
                    <div className="row">
                      <div className="col-md-4 ml-auto mr-auto">
                        <button className="btn btn-danger btn-lg btn-fill">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;