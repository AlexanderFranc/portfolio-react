import React from 'react';
import { Container, Typography, Grid, Paper, LinearProgress, Box } from '@mui/material';

const Skills = () => {
  const technicalSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 }
  ];

  const softSkills = [
    { name: 'Trabajo en equipo', level: 95 },
    { name: 'Comunicación', level: 90 },
    { name: 'Resolución de problemas', level: 85 },
    { name: 'Gestión del tiempo', level: 80 },
    { name: 'Liderazgo', level: 85 }
  ];

  const SkillBar = ({ name, level }) => (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">{level}%</Typography>
      </Box>
      <LinearProgress variant="determinate" value={level} />
    </Box>
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Mis Habilidades
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Habilidades Técnicas
            </Typography>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Habilidades Blandas
            </Typography>
            {softSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;