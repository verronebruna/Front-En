import React from 'react';
import { AppBar, Toolbar, Box, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        history.push('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static">
         <Toolbar variant="dense" className='Nav'>

                <Box display="flex">
                    <Link to='/home' className='text-decorator-none' >
                        <Box>
                            <Avatar alt="Logo: livro" src='https://cdn-icons.flaticon.com/png/512/4212/premium/4212480.png?token=exp=1645718162~hmac=8a9961bd9ff34a9249ef4be8658130c2' />
                        </Box>
                    </Link>
                </Box>

                <Box mx={1} display="flex">
                    <Link to="/posts" className="text-decorator-none">
                        <Button className="botaonav" variant="outlined">Postagens</Button>
                    </Link>
                </Box>

                <Box mx={1} display="flex">
                    <Link to="/temas" className="text-decorator-none">
                        <Button className="botaonav" variant="outlined">Temas</Button>
                    </Link>
                </Box>

                <Box mx={1} display="flex">
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Button className="botaonav" variant="outlined">Cadastrar Tema</Button>
                    </Link>
                </Box>

                <Box mx={1} className="botaonav" onClick={goLogout}>
                    <Button className="botaonav" variant="outlined"> Logout </Button>
                </Box>
        </Toolbar>
        </AppBar >
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;