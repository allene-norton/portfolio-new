import React, { Component } from 'react'
import ShowProject from './ShowProject'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';



class Projects extends Component {
    state = {
        project: 'VINESS'
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.innerText)
        this.setState({ project: e.target.innerText })
        // console.log(this.state.project)
    }

    render() {
        return (
            <div className="Projects" style={{  width: '100vw', height: '100vh' }}>
                <div className="project-bar"  style={{float: 'left', width: '70vw', marginTop: '5em' }}>
                    <ul>
                        <li><Button style={{
                            backgroundColor: 'inherit',
                            color: '#fff',
                            fontSize: '2em',
                            textDecoration: 'none',
                            '&:hover': {
                                backgroundColor: 'inherit',
                            }
                        }} value="viness" onClick={(e) => this.handleClick(e)}>Viness</Button></li>
                        <li><Button style={{
                            backgroundColor: 'inherit',
                            color: '#fff',
                            fontSize: '2em',
                            textDecoration: 'none',
                            '&:hover': {
                                backgroundColor: 'inherit',
                            }
                        }} value="resitown" onClick={(e) => this.handleClick(e)}>ResiTown</Button></li>
                        <li><Button style={{
                            backgroundColor: 'inherit',
                            color: '#fff',
                            fontSize: '2em',
                            textDecoration: 'none',
                            '&:hover': {
                                backgroundColor: 'inherit',
                            }
                        }} value="playbase" onClick={(e) => this.handleClick(e)}>Playbase</Button></li>
                        <li><Button style={{
                            backgroundColor: 'inherit',
                            color: '#fff',
                            fontSize: '2em',
                            textDecoration: 'none',
                            '&:hover': {
                                backgroundColor: 'inherit',
                            }
                        }} value="crecipe" onClick={(e) => this.handleClick(e)}>Crecipe</Button></li>
                        <li><Button style={{
                            backgroundColor: 'inherit',
                            color: '#fff',
                            fontSize: '2em',
                            textDecoration: 'none',
                            '&:hover': {
                                backgroundColor: 'inherit',
                            }
                        }} value="journalwave" onClick={(e) => this.handleClick(e)}>Journalwave</Button></li>
                    </ul>
                </div>
                <div className="project-disp" style={{float: 'right'}}>
                    <ShowProject project={this.state.project} />
                </div>
            </div>
        )
    }
}

export default Projects