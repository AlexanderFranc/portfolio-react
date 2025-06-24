import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Aplicación de Gestión de Tareas',
      description: 'Una aplicación web desarrollada con React y Node.js que permite a los usuarios gestionar sus tareas diarias con interfaz moderna y responsive.',
      image: 'https://cdn.dribbble.com/userupload/9661662/file/original-722a631d12b3b44c6c7c1c4b5c9b27e7.png?resize=1600x1200',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demo: 'https://proyecto1-demo.com'
    },
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico con sistema de pagos integrado y gestión de inventario en tiempo real.',
      image: 'https://cdn.dribbble.com/userupload/9536741/file/original-f0f6f93e3c1fc44c48ceec6ad55d246e.png?resize=1600x1200',
      technologies: ['React', 'Express', 'PostgreSQL'],
      demo: 'https://proyecto2-demo.com'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para visualización de datos y análisis de métricas empresariales en tiempo real.',
      image: 'https://cdn.dribbble.com/userupload/9661817/file/original-5b2c3e15f9fa4c8793f8d0aa73e33365.png?resize=1600x1200',
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