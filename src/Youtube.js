import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, IconButton, Typography } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	media: {
		height: 140,
	},
});

const Youtube = () => {
	const classes = useStyles();

	return (
		<div>
			<Card>
				<Typography align='left'>
					<CardHeader
						action={
							<IconButton
								onClick={() => {
									console.log('clicked icon');
								}}>
								<YouTubeIcon color='secondary' />
							</IconButton>
						}
						title='YouTube'
					/>
				</Typography>

				<CardMedia
					className={classes.media}
					image='https://cdn.vox-cdn.com/thumbor/r3AM_q5ktTjtd8gjoFwpAakshaA=/0x0:1680x1050/1400x1050/filters:focal(706x391:974x659):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/56414325/YTLogo_old_new_animation.0.gif'
					title='Tube'
				/>
				<CardContent>
					<Typography>Top 10 Instructional Channels</Typography>
				</CardContent>

				<Button
					size='small'
					color='primary'
					href='https://pythonistaplanet.com/top-10-youtube-channels-for-programmers/'>
					Learn More
				</Button>
			</Card>
		</div>
	);
};

export default Youtube;
