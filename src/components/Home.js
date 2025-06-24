import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box textAlign="center">
        <Typography variant="h2" gutterBottom>
          Bienvenido a mi Portafolio
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Desarrollador Web Full Stack
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;