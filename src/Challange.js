import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, IconButton, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

const useStyles = makeStyles({
	media: {
		height: 140,
	},
});

const Websites = () => {
	const classes = useStyles();

	return (
		<div>
			<Card>
				<CardHeader
					action={
						<IconButton
							onClick={() => {
								console.log('clicked icon');
							}}>
							<DeveloperModeIcon />
						</IconButton>
					}
					title='Code Challanges'
				/>
				<CardMedia
					className={classes.media}
					image='https://steamuserimages-a.akamaihd.net/ugc/778493212058676140/7B02C28E2A46DBDD39C4B2801AD7AF5D2A9BED18/'
					title='Code challange'
				/>
				<CardContent>
					<Typography>Challange yourself</Typography>
				</CardContent>

				<Button
					size='small'
					color='primary'
					href='https://www.freecodecamp.org/news/the-10-most-popular-coding-challenge-websites-of-2016-fb8a5672d22f/'>
					Learn More
				</Button>
			</Card>
		</div>
	);
};

export default Websites;
