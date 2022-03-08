import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {StyleButtonBack} from '../Styles/StyledButtons.js';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
    }));

function Navbar() {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#6F8AB7' }}>
                <Toolbar>
                    <Link to= '/'>
                      <StyleButtonBack >{'Regresar'}</StyleButtonBack>
                    </Link> 
                </Toolbar>

            </AppBar>
            
        </div>
    );
}

export default Navbar;