import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import '../../Style/carousel.scss'

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                >
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Cookies",
        Caption: "Surprise your friends!",
        contentPosition: "left",
        Items: [
            {
                Image: "https://images.unsplash.com/photo-1577372223077-67718e64358e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            },
            {
                Image: "https://images.unsplash.com/photo-1577222960172-18c61acf6791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            }
        ]
    },
    {
        Name: "Candies",
        Caption: "Lights everyone face with happiness",
        contentPosition: "middle",
        Items: [
            {
                Image: "https://images.unsplash.com/photo-1601493701002-3223e7e1ebaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                        },
            {
                Image: "https://images.unsplash.com/photo-1604760247054-1b89d3f47843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        }
        ]
    },
]

class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: true,
            navButtonsAlwaysInvisible: false,
            cycleNavigation: true
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    toggleCycleNavigation() {
        this.setState({
            cycleNavigation: !this.state.cycleNavigation
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    render() {
        return (
            <div style={{ marginTop: "0px", color: "#494949" }}>

                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    cycleNavigation={this.state.cycleNavigation}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    // fullHeightHover={false}
                    // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                    // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                    // indicatorContainerProps={{style: {margin: "20px"}}}
                    // NextIcon='next'
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>

            </div>

        )
    }
}

export default BannerExample;