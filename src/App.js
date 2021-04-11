import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './Create';
import Youtube from './Youtube';
import Navi from './Navi';
import Boxes from './Boxes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Websites from './Websties';
import Challange from './Challange'
import Misc from './Misc'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#010002',
	
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navi />
			<Router>
				<Switch>
					<Route exact path='/create'>
						<Create />
					</Route>
					<Route path='/boxes'>
						<Boxes />
					</Route>
					<Route path='/Youtube'>
						<Youtube />
					</Route>
					<Route path='/websites'>
						<Websites />
					</Route>
					<Route path='/challange'>
						<Challange />
					</Route>
					<Route path='/misc'>
						<Misc />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
