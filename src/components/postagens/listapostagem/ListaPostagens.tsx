import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagens from '../../../models/Postagens';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagens.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaPostagens() {
  const [posts, setPosts] = useState<Postagens[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])
  
    async function getPost() {
      await busca("/postagens", setPosts, {
        headers: {
          'Authorization': token
        }
      })
    }
  
    useEffect(() => {
  
      getPost()
  
    }, [posts.length])
  
    return (
      <>
        {
          posts.map(post => (
            <Box m={2} >
              <Card variant="outlined">
                <CardContent>
                  <Typography className="textPostagens" gutterBottom>
                    Postagens
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {post.titulo}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.texto}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.tema?.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
  
                    <Link to={`/formularioPostagens/${post.id}`} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" size='small' className="btatualizar">
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarPostagens/${post.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' className="btdeletar">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          ))
        }
      </>
    )
  }
  
export default ListaPostagens;