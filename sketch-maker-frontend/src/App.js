import React from 'react';
import './App.css';
import SandboxSketch from './components/SandboxSketch'
import Sketches from './components/Sketches'
import CreateSketch from './components/CreateSketch'
import MyNav from './components/MyNav'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { getSketches } from './redux/actions/sketchActions';
// import Button from 'react-bootstrap/Button';



class App extends React.Component {

  componentDidMount() {
    this.props.getSketches()
  }

  render () {
    return (
    <div className="App">
      <Router >
      <MyNav />
        <Switch>
          <Route exact path="/"
          render={(props) => (
            <SandboxSketch {...props} angle={0} rotateRate={0.5} />
          )} 
            />
          <Route exact path="/sketches" component={Sketches}/>
          <Route exact path="/sketches/new" component={CreateSketch}/>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default connect(null, { getSketches })(App)
