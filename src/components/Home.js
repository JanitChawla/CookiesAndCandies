import React from 'react';
import GridCards from './Grid/grid';
import Example from './Carousel/carousel';
import Footer from './Footer/Footer';


function home () {
    return (
        <React.Fragment>
            <Example />
            <GridCards />
            <Footer />
        </React.Fragment>
    )
}

export default home;