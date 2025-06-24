import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Portafolio
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/about">Sobre Mí</Button>
          <Button color="inherit" component={Link} to="/skills">Habilidades</Button>
          <Button color="inherit" component={Link} to="/projects">Proyectos</Button>
          <Button color="inherit" component={Link} to="/experience">Experiencia</Button>
          <Button color="inherit" component={Link} to="/languages">Lenguajes</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;