import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ background: '#A359A0' }}>
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal 
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Posts
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor' >
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;