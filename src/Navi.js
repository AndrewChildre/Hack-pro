import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles({
  root: {
      display: 'inline-block',
    minWidth: 345,
    marginTop: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
 
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return ( 
  <div>

        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
     DevRes
    </Typography>
    <Button id='login' color="inherit">Login</Button>
  </Toolbar>
</AppBar>

  
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Videos
        </Typography>
        <Typography variant="h5" component="h2">
          Top 10 You Tubers
        </Typography>
       
        <Typography variant="body2" component="p">
         The Best Content
    
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

            <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Code Challanges
        </Typography>
        <Typography variant="h5" component="h2">
          Most Popular 
        </Typography>
       
        <Typography variant="body2" component="p">
         Ready to challange your self
    
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


            <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Web Resourses
        </Typography>
        <Typography variant="h5" component="h2">
          Most Used
        </Typography>
       
        <Typography variant="body2" component="p">
         Ready to challange your self
    
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Programming Languages
        </Typography>
        <Typography variant="h5" component="h2">
            Top of the Heap
        </Typography>
       
        <Typography variant="body2" component="p">
         Figure out what to study
    
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </div>
  );
}