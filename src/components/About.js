import React from 'react';
import { Container, Typography, Box, Avatar, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <Avatar
                alt="Jhonatan Franco"
                src="/images/profile.jpg"
                sx={{ width: 200, height: 200 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Jhonatan Franco
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              Desarrollador Web Full Stack
            </Typography>
            <Typography variant="body1" paragraph>
              ¡Hola! Soy un apasionado desarrollador web con experiencia en crear soluciones digitales innovadoras.
            </Typography>
            <Typography variant="body1" paragraph>
              Datos de contacto:
            </Typography>
            <Typography variant="body1">
              📧 alexanderfrancot@outlook.com
            </Typography>
            <Typography variant="body1">
              📱 0984401749
            </Typography>
            <Typography variant="body1">
              📍 Quito, Ecuador
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;