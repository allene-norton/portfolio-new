import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import BasicTable from './Table';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100vw'
    },
    header: {
        color: '#fff',
        fontWeight: 600,
        marginBottom: '1.2em',
        marginTop: '3em'
    },
    headerT: {
        color: '#fff',
        fontWeight: 600,
        marginBottom: '0.7em',
        marginTop: '3em'
    },
    tech: {
        float: 'right',
        marginRight: '3em',
        width: '50vw'
    },
    skills: {
        float: 'left',
        marginLeft: '3em',
        textAlign: 'center',
        width: '40vw'
    },
    orange: { color: '#f77944',},
    yellow: {color: '#feef01',},
    green: {color: '#00b19b',},
    blue: {color: '#009cd6',},
    purple: {color: '#b557ad',},
    white: {color: '#fff'}
}));


const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.skills} >
                <Typography variant='h2' className={classes.header} >SKILLS</Typography>
                <Typography variant='h6' className={classes.orange} >COMMUNICATION</Typography>
                <Typography variant='h6' className={classes.yellow} >COLLABORATION</Typography>
                <Typography variant='h6' className={classes.green} >PASSION FOR TEACHING</Typography>
                <Typography variant='h6' className={classes.blue} >DEVOTION TO LEARNING</Typography>
                <Typography variant='h6' className={classes.purple} >CROSS-FUNCTIONAL</Typography>
                <Typography variant='h6' className={classes.orange} >AGILE</Typography>
                <Typography variant='h6' className={classes.yellow} >PUBLIC SPEAKING</Typography>
                <Typography variant='h6' className={classes.green} >TEAM-BUILDING</Typography>
                <Typography variant='h6' className={classes.blue} >MANAGEMENT</Typography>
                <Typography variant='h6' className={classes.purple} >GRAPHIC DESIGN</Typography>
            </div>
            <div className={classes.tech} >
                <Typography variant='h2' className={classes.headerT} >TECH</Typography>
                <BasicTable />
            </div>
        </div>)
}
export default About