import { useState } from 'react';
import './App.css';
import GroupPage from './components/GroupPage';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Homepage}/>
        <Route path='/group' component={GroupPage}/>
      </div>
    </Router>
  );
}

export default App;
