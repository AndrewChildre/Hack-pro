import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, IconButton, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles({
	media: {
		height: 140,
	},
});

const Misc = () => {
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
							<AccountBoxIcon />
						</IconButton>
					}
					title='Misc.'
				/>
				<CardMedia
					className={classes.media}
					image='https://thumbs.gfycat.com/CheeryAfraidBream-size_restricted.gif'
				/>
				<CardContent>
					<Typography>Random Coding Info</Typography>
				</CardContent>

				<Button
					size='small'
					color='primary'
					href='https://www.idtech.com/blog/coding-facts-to-wrap-your-head-around-and-have-fun-with'>
					Learn More
				</Button>
			</Card>
		</div>
	);
};

export default Misc;
