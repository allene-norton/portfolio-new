import resitown from '../Images/resitowndemogif.gif'
import viness from '../Images/vinessdemogif.gif'
import playbase from '../Images/playbasedemogif.gif'
import crecipe from '../Images/crecipedemogif.gif'
import journalwave from '../Images/journalwavedemogif.gif'
import resitownlogo from '../Images/resitownlogo.png'
import vinesslogo from '../Images/vinesslogo.png'
import playbaselogo from '../Images/playbaselogo.png'
import crecipelogo from '../Images/crecipelogo.png'
import journalwavelogo from '../Images/journalwavelogo.png'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

    button: {
        backgroundColor: 'inherit',
        color: '#fff',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'inherit',
        },
    },
    link: {
        textDecoration: 'none'
    }
}));

const descriptions = {
    RESITOWN: {
        desc: 'ResiTown is a web application that connects volunteers to volunteer opportunities. *Note: This project was specific to Covid-related volunteer opportunities and was taken down by the company. The live demo is the same source code adapted for a personal volunteer project.',
        live: 'https://www.helpingcentraltexas.org',
        video: null,
        tech: '  Rails 6 ⋅ PostgresQL ⋅ Devise ⋅ TailwindCSS ⋅ JavaScript'
    },
    VINESS: {
        desc: 'Viness is a wine pairing application. Users can find wine recommendations and pairings, recipe pairings, save favorite wines, and interact through comments.',
        live: 'http://viness.online',
        video: 'https://www.youtube.com/watch?v=E5aX-LlvIx8&feature=youtu.be&ab_channel=AlleneNorton',
        tech: '  Rails API ⋅ PostgresQL ⋅ Google OAuth ⋅ React ⋅ Semantic UI ⋅ Custom CSS'
    },
    PLAYBASE: {
        desc: 'Playbase allows users to log in with Spotify, search for and save albums, and listen in-app while viewing the album covers in a visually-pleasing environment.',
        live: null,
        video: 'https://www.youtube.com/watch?v=WgKxXew3N4o&feature=youtu.be&ab_channel=AlleneNorton',
        tech: '  Rails API ⋅ PostgresQL ⋅ Spotify OAuth ⋅ React ⋅ Semantic UI ⋅ Custom CSS'
    },
    CRECIPE: {
        desc: 'Crecipe is an early project I made for Flatiron school. Users can sign in and create their own recipes, see recipes made by all users, add recipes to favorites, and even take a quiz on their food knowledge.',
        live: null,
        video: null,
        tech: '  Rails 6 ⋅ SQLite3 ⋅ MilligramCSS ⋅ jQuery'
    },
    JOURNALWAVE: {
        desc: 'Journalwave is a Ruby CLI application that allows users to write, edit, and save journal entries, as well as recieve an emotional analysis of their entry powered by the Twinword Emotional Analysis API.',
        live: null,
        video: 'https://www.youtube.com/watch?v=rdkNK7EKqms&ab_channel=AlleneNorton',
        tech: '  Ruby ⋅ SQLite3 ⋅ LOLCAT ⋅ Twinword API'
    },
}


const ShowProject = (props) => {
    console.log(props.project)
    const classes = useStyles()

    function defineGif() {
        if (props.project === 'RESITOWN') {
            return <li><a href={resitown} target="_blank" rel="noreferrer" className={classes.link}><Button className={classes.button}>GIF Demo</Button></a></li>
        } else if (props.project === 'VINESS') {
            return <li><a href={viness} target="_blank" rel="noreferrer" className={classes.link}><Button className={classes.button}>GIF Demo</Button></a></li>
        } else if (props.project === 'PLAYBASE') {
            return <li><a href={playbase} target="_blank" rel="noreferrer" className={classes.link}><Button className={classes.button}>GIF Demo</Button></a></li>
        } else if (props.project === 'CRECIPE') {
            return <li><a href={crecipe} target="_blank" rel="noreferrer" className={classes.link} ><Button className={classes.button}>GIF Demo</Button></a></li>
        } else if (props.project === 'JOURNALWAVE') {
            return <li><a href={journalwave} target="_blank" rel="noreferrer" className={classes.link}><Button className={classes.button}>GIF Demo</Button></a></li>
        } else {
            return null
        }
    }
    function defineLogo() {
        if (props.project === 'RESITOWN') {
            return resitownlogo
        } else if (props.project === 'VINESS') {
            return vinesslogo
        } else if (props.project === 'PLAYBASE') {
            return playbaselogo
        } else if (props.project === 'CRECIPE') {
            return crecipelogo
        } else if (props.project === 'JOURNALWAVE') {
            return journalwavelogo
        } else {
            return ''
        }
    }
    function renderLink() {
        console.log(descriptions[props.project].live)
        if (descriptions[props.project].live) {
            console.log(descriptions[props.project].live)
            return <li><a href={descriptions[props.project].live} target="_blank" rel="noreferrer" className={classes.link}><Button className={classes.button}>Live Demo</Button></a></li>
        }
    }
    function renderVideo() {
        if (descriptions[props.project].video) {
            return <li><a href={descriptions[props.project].video} target="_blank" rel="noreferrer" className={classes.link}><Button className={classes.button}>Video Demo</Button></a></li>
        }
    }

    return (
        <div className="show-project" >

            <div className="project-desc" style={{ float: 'right', width: '30vw', height: '100vh' }}>
                <img className="project-logo" src={defineLogo()} alt={props.project + 'logo'} style={{width:'300px'}} />

                <p style={{ float: 'right' }}>
                <Typography style={{fontWeight: 400, color: '#fff'}} >{descriptions[props.project].desc}</Typography>
                </p>
                <div className="tech" >
                    {/* <strong>Tech</strong> */}
                    <div className="tech-desc" >
                        <Typography style={{fontWeight: 400, color: '#fff'}} >{descriptions[props.project].tech}</Typography>
                    </div>
                </div>
                <div className="links">
                    <ul style={{listStyleType: 'none'}}>
                        {renderLink()}
                        {renderVideo()}
                        {defineGif()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShowProject


