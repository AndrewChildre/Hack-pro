import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, IconButton, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import WebIcon from '@material-ui/icons/Web';

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
							<WebIcon />
						</IconButton>
					}
					title='Best WebSites'
				/>
				<CardMedia
					className={classes.media}
					image='https://designproficient.com/blog/wp-content/uploads/2018/02/design.gif'
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography>Find what you need</Typography>
				</CardContent>

				<Button
					size='small'
					color='primary'
					href='https://opensource.com/article/19/12/programming-resources'>
					Learn More
				</Button>
			</Card>
		</div>
	);
};

export default Websites;
