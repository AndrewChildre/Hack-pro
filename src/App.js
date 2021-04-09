import React from 'react'
import './App.css';
import Navi from './Navi'
import Cards from './Cards'
import Youtube from './Youtube'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
			<div className='App'>
				<Navi />
				<Cards />
        <Route path='/youtube' component={Youtube} />
			</div>
		</Router>
	);
}

export default App;
