import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Counter from '../Bid/Bidingcounter'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginLeft: "20px",
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

let list = [
    {
        profilepic: "R",
        title: "Dark Chocolates",
        date: "July 10 2021",
        image: "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbmRpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
        type: "Chocolate",
        MAP: "₹200",
        egg: "Yes",
        BakedTime: "15 mins"
    },
    {
      profilepic: "J",
      title: "Vanilla M&M's",
      date: "July 10 2021",
      image: "https://images.unsplash.com/photo-1534705867302-2a41394d2a3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      type: "Vanilla",
      MAP: "₹200",
      egg: "No",
      BakedTime: "40 mins"
  },
  {
    profilepic: "J",
    title: "Oatmeal Cookies",
    date: "July 10 2021",
    image: "http://cdn.sallysbakingaddiction.com/wp-content/uploads/2015/04/dark-chocolate-chunk-oatmeal-cookies-5.jpg",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    type: "Oatmeal",
    MAP: "₹200",
    egg: "Yes",
    BakedTime: "2 hour"
  },
  {
    profilepic: "J",
    title: "Nutella Candies",
    date: "July 10 2021",
    image: "https://i.pinimg.com/originals/dc/2d/b8/dc2db80cc317d0fecb06d3bf8b653800.jpg",
    detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    type:  "Nutella",
    MAP: "₹200",
    egg: "Yes",
    BakedTime: "30 min"
  },
  {
    profilepic: "J",
    title: "HomeMade Dark Chocolates",
    date: "July 10 2021",
    image: "https://cdn.shopify.com/s/files/1/0279/6329/3831/products/12_SECTION_BROWN_BOX_1024x1024.jpg?v=1580103165",
    detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    type: "Chocolate",
    MAP: "₹200",
    egg: "Yes",
    BakedTime: "25 min"
  },
  {
    profilepic: "J",
    title: "Vanilla Candies",
    date: "July 10 2021",
    image: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    type: "Vanilla",
    MAP: "₹200",
    egg: "No",
    BakedTime: "1 hour"
  },
]


function MainGrid (props) {
  const classes = useStyles();
  return (
  <Grid item xs={12} sm={6} md={4} >
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {props.data.profilepic}
                </Avatar>
              }
              action={
                <IconButton
          onClick = {() => console.log("data.expanded to be true", props.data.expanded = !props.data.expanded) }
          aria-expanded="true"
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              }
              title={props.data.title}
              subheader={props.data.date}
            />
            <CardMedia
              className={classes.media}
              image={props.data.image}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Minimum Asking Price -  ${props.data.MAP}. Eggs used - ${props.data.egg}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {"Baked Time - " + props.data.BakedTime}
              </Typography>
            </CardContent>
      
        <CardContent>
          {/* <Typography style={{marginTop: "-30px"}} paragraph>Details</Typography>           */}
          <Typography paragraph>
            <Counter />
          </Typography>
        </CardContent>
      
    </Card>
    </Grid>
  );
}

export default function GridCards() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let filter = (
    <div container>
      <div style={{color: "Grey" , fontSize: "30px" , fontWeight: 'bold'}}>
      Filter
      </div>
    <FormGroup style={{justifyContent: "center"}} row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Chocolate"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Oatmeal"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
        label="Nutella"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
        }
        label="Vanilla"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
        label="Eggless"
      />
    </FormGroup>
    </div>
  )

  

let grid = (
 list.map((data, i) => ( 
    <MainGrid data={data} />
    )
)
)
if(state.checkedA || state.checkedB || state.checkedC || state.checkedD || state.checkedE) {
  if(state.checkedA) {
    grid = (
      list.filter(data=> data.type ==="Chocolate")
      .map((data, i) => ( 
        <MainGrid data={data} />
        ))
    )
  }
  else if(state.checkedB) {
    grid = (
      list.filter(data=> data.type ==="Oatmeal")
      .map((data, i) => ( 
        <MainGrid data={data} />
        ))
    )
  }
  else if(state.checkedC) {
    grid = (
      list.filter(data=> data.type ==="Nutella")
      .map((data, i) => ( 
        <MainGrid data={data} />
        ))
    )
  }else if(state.checkedD) {
    grid = (
      list.filter(data=> data.type ==="Vanilla")
      .map((data, i) => ( 
        <MainGrid data={data} />
        ))
    ) }
    else if(state.checkedE) {
      grid = (
        list.filter(data=> data.egg ==="No")
        .map((data, i) => ( 
          <MainGrid data={data} />
          ))
      )
    }
  }


  return (
    <React.Fragment>
    {filter}
    <Grid container>
      {grid}
    </Grid>
    </React.Fragment>
  );
}
