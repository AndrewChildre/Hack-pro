import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Youtube from './Youtube';
import Websites from './Websties';
import Challange from './Challange';
import Misc from './Misc';

const boxes = (props) => {
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={3}>
					<Youtube />
				</Grid>

				<Grid item xs={12} sm={6} md={3}>
					<Paper>
						<Websites />
					</Paper>
				</Grid>

				<Grid item xs={12} sm={6} md={3}>
					<Paper>
						<Challange />
					</Paper>
				</Grid>

				<Grid item xs={12} sm={6} md={3}>
					<Paper>
						<Misc />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default boxes;
