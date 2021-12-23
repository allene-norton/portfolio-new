import React from 'react'
import { Parallax } from 'react-parallax';
import { makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';



function Parlx() {
    const useStyles = makeStyles((theme) => ({
        bigDiv: {
            flexGrow: 1,
        },
    }));

    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };

    const classes = useStyles()

    let zig = "https://gifimages.us/wp-content/uploads/2021/07/Vaporwave-Vackground-34.jpg"

    return (
        <div>
            <Parallax bgImage={zig} bgImageAlt="the cat" strength={500} >
                <div style={{ height: '95vh' }}>
                    <div style={insideStyles}>HTML inside the parallax</div>
                </div>
            </Parallax >
            <Parallax bgImage={zig} bgImageAlt="the cat" strength={500}>
                <div style={{ height: 900 }}>
                    <p style={{color: '#fff'}}>Scroll</p>
                    <div style={insideStyles}>Dynamic Blur</div>
                </div>
            </Parallax>
            < Parallax bgImage={zig} bgImageAlt="the cat" strength={500} >
                <div style={{ height: 800 }}>
                    <div style={insideStyles}>HTML inside the parallax</div>
                </div>
            </Parallax >
            < Parallax bgImage={zig} bgImageAlt="the cat" strength={500} >
                <div style={{ height: 800 }}>
                    <div style={insideStyles}>HTML inside the parallax</div>
                </div>
            </Parallax >
        </div>
    )
};

export default Parlx