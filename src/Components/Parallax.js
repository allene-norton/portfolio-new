import React from 'react'
import { Parallax } from 'react-parallax';
import Hero from './Hero'
import black from '../assets/images/solid-color-image.jpeg'


function Parlx() {

    const insideStyles = {
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate(-50%,-50%)"
    };

    let zig = "https://gifimages.us/wp-content/uploads/2021/07/Vaporwave-Vackground-34.jpg"
    let zag = "https://wallpapercave.com/wp/wp2729921.gif"

    return (
        <div>
            <Parallax bgImage={zag} bgImageAlt="the cat" strength={40} >
                <div style={{ height: '95vh' }}>
                    <div style={insideStyles}>
                        <Hero />
                    </div>
                </div>
            </Parallax >
            <Parallax bgImage={black} bgImageAlt="the cat" strength={300}>
                <div style={{ height: 900 }}>
                    <p style={{color: '#fff'}}>Scroll</p>
                    <div style={insideStyles}>Dynamic Blur</div>
                </div>
            </Parallax>
            < Parallax bgImage={zig} bgImageAlt="the cat" strength={500} >
                <div style={{ height: 800 }}>
                    <div style={insideStyles}>HTML</div>
                </div>
            </Parallax >
            < Parallax bgImage={zig} bgImageAlt="the cat" strength={500} >
                <div style={{ height: '100vh' }}>
                    <div style={insideStyles}>HTML </div>
                </div>
            </Parallax >
        </div>
    )
};

export default Parlx