// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from "react";

//import axios from "axios";
import "./App.css";
import Navigation from "./components/Navigation";
// import Sidebar from "./components/Navigation/Sidebar";
// import MainContent from "./components/MainContent";
import LandingPage from "./components/LandingPage";
import { Container } from "reactstrap";
import "typeface-montserrat";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faIgloo,
  faPlusCircle,
  faCopy,
  faTrash,
  faHome,
  faUser,
  faSignOutAlt,
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
  faAt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faIgloo,
  faPlusCircle,
  faCopy,
  faTrash,
  faHome,
  faUser,
  faSignOutAlt,
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
  faAt,
  fab
);

class App extends Component {
  // state = {
    
  //   loading: false,
  //   loaded: false
  // };


  // handleClick = e => {
  //   this.setState({ testLogin: false });
  // };



  render() {
   
      return (
        
        <div>
          <Container fluid>
              <LandingPage handleClick={this.handleClick} />
              <Navigation class="navbar-transparent" />
              {/* <Sidebar /> */}
              {/* <MainContent /> */}
          </Container>
        </div>
        
      );

  }
}

export default App;