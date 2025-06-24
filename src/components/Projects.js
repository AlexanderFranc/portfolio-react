import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Aplicación de Gestión de Tareas',
      description: 'Una aplicación web desarrollada con React y Node.js que permite a los usuarios gestionar sus tareas diarias con interfaz moderna y responsive.',
      image: '/images/project1.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demo: 'https://proyecto1-demo.com'
    },
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico con sistema de pagos integrado y gestión de inventario en tiempo real.',
      image: '/images/project2.png',
      technologies: ['React', 'Express', 'PostgreSQL'],
      demo: 'https://proyecto2-demo.com'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para visualización de datos y análisis de métricas empresariales en tiempo real.',
      image: '/images/project3.png',
      technologies: ['React', 'D3.js', 'Firebase'],
      demo: 'https://proyecto3-demo.com'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Mis Proyectos
      </Typography>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tecnologías: {project.technologies.join(', ')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<LaunchIcon />} href={project.demo} target="_blank">
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;