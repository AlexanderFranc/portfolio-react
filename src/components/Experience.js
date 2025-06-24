import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot 
} from '@mui/lab';

const Experience = () => {
  const experiences = [
    {
      title: 'Desarrollador Full Stack Senior',
      company: 'Empresa Tech',
      period: '2021 - Presente',
      description: 'Desarrollo de aplicaciones web utilizando React, Node.js y AWS. Liderazgo de equipo y mentoría de desarrolladores junior.'
    },
    {
      title: 'Desarrollador Front-end',
      company: 'Startup Innovadora',
      period: '2019 - 2021',
      description: 'Desarrollo de interfaces de usuario con React y TypeScript. Implementación de diseños responsivos y optimización de rendimiento.'
    },
    {
      title: 'Desarrollador Web Junior',
      company: 'Agencia Digital',
      period: '2018 - 2019',
      description: 'Desarrollo de sitios web con HTML, CSS y JavaScript. Mantenimiento y actualización de sitios existentes.'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Experiencia Profesional
      </Typography>
      
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" component="h1">
                  {exp.title}
                </Typography>
                <Typography color="primary">{exp.company}</Typography>
                <Typography color="text.secondary">{exp.period}</Typography>
                <Typography sx={{ mt: 2 }}>{exp.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default Experience;