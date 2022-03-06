import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagens from '../../../models/Postagens';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {
        let history = useHistory();
        const { id } = useParams<{ id: string }>();
        const [temas, setTemas] = useState<Tema[]>([])
        const [token, setToken] = useLocalStorage('token');
    
        useEffect(() => {
            if (token == "") {
                alert("Você precisa estar logado")
                history.push("/login")
    
            }
        }, [token])
    
        const [tema, setTema] = useState<Tema>(
            {
                id: 0,
                descricao: ''
            })
        const [postagem, setPostagem] = useState<Postagens>({
            id: 0,
            titulo: '',
            texto: '',
            tema: null
        })
    
        useEffect(() => { 
            setPostagem({
                ...postagem,
                tema: tema
            })
        }, [tema])
    
        useEffect(() => {
            getTemas()
            if (id !== undefined) {
                findByIdPostagem(id)
            }
        }, [id])
    
        async function getTemas() {
            await busca("/tema", setTemas, {
                headers: {
                    'Authorization': token
                }
            })
        }
    
        async function findByIdPostagem(id: string) {
            await buscaId(`postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        }
    
        function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    
            setPostagem({
                ...postagem,
                [e.target.name]: e.target.value,
                tema: tema
            })
    
        }
    
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
    
            if (id !== undefined) {
                put(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Postagem atualizada com sucesso');
            } else {
                post(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Postagem cadastrada com sucesso');
            }
            back()
    
        }
    
        function back() {
            history.push('/posts')
        }

    return (
        <Container maxWidth="sm" className="topo">
            <form >
                <Typography variant="h3" className="formulario"component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper">
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" className="finalizar">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;