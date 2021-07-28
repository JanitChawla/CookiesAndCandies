import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginLeft: "20px",
    marginTop: "20px",
    // backgroundColor: "black",
    // color: "white"
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
        expanded: false
    },
    {
      profilepic: "J",
      title: "M&M's",
      date: "July 10 2021",
      image: "https://images.unsplash.com/photo-1534705867302-2a41394d2a3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      expanded: false
  },
  {
    profilepic: "J",
    title: "M&M's",
    date: "July 10 2021",
    image: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    expanded: false
  },
  {
    profilepic: "J",
    title: "M&M's",
    date: "July 10 2021",
    image: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    expanded: false
  },
  {
    profilepic: "J",
    title: "M&M's",
    date: "July 10 2021",
    image: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    detail: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    expanded: false
  },
  {
    profilepic: "J",
    title: "M&M's",
    date: "July 10 2021",
    image: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    expand: " Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    expanded: false
  },
]

export default function GridCards() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   console.log("clicked")
  //   setExpanded(!expanded);
  // };

  return (
    <Grid container>
      {list.map((data, i) => ( 
        <Grid item xs={12} sm={6} md={4} >
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {data.profilepic}
                </Avatar>
              }
              action={
                <IconButton key={i}
          onClick = {() => console.log("data.expanded to be true", data.expanded = !data.expanded) }
          aria-expanded="true"
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              }
              title={data.title}
              subheader={data.date}
            />
            <CardMedia
              className={classes.media}
              image={data.image}
        // title="Dark Chocolates"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.detail}
              </Typography>
            </CardContent>
      <Collapse in="true" timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
          <Typography paragraph>
            {data.expand}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
        ))}
    </Grid>
  );
}
