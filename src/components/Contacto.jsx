import React from 'react'
import {TextField, Button, Box, Container, Grid} from '@mui/material'

export default function Contacto() {

    return (
        <>
        <Grid container justifyContent='center' alignItems='center'>
            <Box sx={{ border:'2', margin:'4' }}>
                <Container>
                <TextField label='Nombre Completo'></TextField><br/>
                <TextField label='Telefono móvil'></TextField><br/>
                <TextField label='Correo Electrónico'></TextField><br/>
                <Button>Enviar</Button>
                </Container>
            </Box>
        </Grid>

        </>
    )
}
