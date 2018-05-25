import React, { Component } from 'react';
import Projects from './Components/Projects';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Moblie Development'
        },
        {
          title: 'Ecommerce Shopping cart',
          category: 'Web Development'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
