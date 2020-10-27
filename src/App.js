import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About"
import Contact from "./Components/Contact"
import Nav from "./Nav"
import Home from "./Components/Home"
import {Board} from './Components/Board'
import Card from './Components/Card'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (


    <div className='App'>
      <main className='flexbox'>

        <Board id='board-1' className='board'>
          <Card id="card-1" className="card" draggable="true">
            <p>Card one</p>
          </Card>
        </Board>

        <Board id='board-2' className='board'>
          <Card id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Card>
        </Board>

      </main>
    </div>


    // <Router>
    //     <div className="App">
    //       <Nav />
    //       <Switch>
    //         <Route path="/" exact component={Home} />
    //         <Route path="/about" component={About} />
    //         <Route path="/contact" component={Contact} />
    //       </Switch>
    //     </div>
    //   </Router>
    
  );
}

export default App;
