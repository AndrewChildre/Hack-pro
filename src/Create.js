import React from 'react';
import Typograghy from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({
	// btn: {
	// 	fontSize: 60,
	// 	backgroundColor: 'green', 
	// 	'&:hover': { backgroundColor: 'red'}
	// },

	// title: {
	// 	textDecoration: 'underline',
	// 	marginBottom: 20
	// }
	field:{
		marginBottom: 25
	}
})

const Create = () => {
	 
	const classes = useStyles()

	return (
		<Container>
			<Typograghy
				// className={classes.title}
				variant='h6'
				color='textSecondary'
				component='h2'
				gutterBottom>
				Create new Note
			</Typograghy>

			<form noValidate autoComplete='off'>
				<TextField
					className={classes.field}
					label='note'
					variant='outlined'
					color='secondary'
					required
				/>
			</form>

			<form noValidate autoComplete='off'>
				<TextField
					className={classes.field}
					label='note'
					variant='outlined'
					color='secondary'
					multiline rows={4}
					required
				/>
			</form>

			<Button
				type='submit'
				// sclassName={classes.btn}
				color='primary'
				variant='contained'
				onClick={() => {
					console.log('You Clicked');
				}}
				endIcon={<ArrowForwardOutlinedIcon />}>
				Submit
			</Button>

			{/* <Button type='submit'>Submit</Button>
			<Button type='submit' color='secondary' variant='outlined'>Submit</Button>

			<ButtonGroup color='secondary' variant='contained'>
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
				</ButtonGroup>	 */}

			{/* ==========ICONS=============== */}
			<br />
			<AcUnitOutlinedIcon />
			<AcUnitOutlinedIcon fontSize='large' color='primary' />
		</Container>
	);
};

export default Create;
