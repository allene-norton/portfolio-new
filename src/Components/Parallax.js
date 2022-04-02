import React from 'react'
import { Parallax } from 'react-parallax';
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import flipped from '../assets/images/solid-color-image.jpeg'
import zag from '../assets/images/rrainbow.gif'
import rainbow from '../assets/images/angryimg.png'

function Parlx() {

    const insideStyles = {
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate(-50%,-50%)"
    };

    // const aboutStyles = {
    //     marginRight: '3em'
    // }

    // let zig = 
    // let zag = "https://wallpapercave.com/wp/wp2729921.gif"

    return (
        <div>
            <Parallax bgImage={zag} bgImageAlt="the cat" strength={40} >
                <div style={{ height: '100vh' }} id="home">
                    <div style={insideStyles}>
                        <Hero />
                    </div>
                </div>
            </Parallax >
            <Parallax bgImage={flipped} bgImageAlt="the cat" strength={40}>
                <div style={{ height: '100vh'}} id="about">
                    {/* <p style={{color: '#fff'}}>Scroll</p> */}
                    <div><About /></div>
                </div>
            </Parallax>
            < Parallax bgImage={rainbow} bgImageAlt="the cat" strength={40} >
                <div style={{ height: '100vh' }} id="portfolio" >
                    <div style={insideStyles}><Portfolio /></div>
                </div>
            </Parallax >
            {/* < Parallax bgImage={flipped} bgImageAlt="the cat" strength={40} >
                <div style={{ height: '100vh' }} id="resume">
                    <div style={insideStyles}><Resume /></div>
                </div>
            </Parallax > */}
        </div>
    )
};

export default Parlx