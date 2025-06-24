import React from 'react';
import { Container, Typography, Grid, Paper, Box, CircularProgress } from '@mui/material';

const Languages = () => {
  const programmingLanguages = [
    { name: 'JavaScript', proficiency: 90, color: '#F7DF1E' },
    { name: 'Python', proficiency: 85, color: '#3776AB' },
    { name: 'Java', proficiency: 75, color: '#007396' },
    { name: 'C++', proficiency: 70, color: '#00599C' },
    { name: 'PHP', proficiency: 80, color: '#777BB4' },
    { name: 'Ruby', proficiency: 65, color: '#CC342D' }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Lenguajes de Programación
      </Typography>
      
      <Grid container spacing={4}>
        {programmingLanguages.map((lang, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={lang.proficiency}
                  size={100}
                  thickness={5}
                  sx={{ color: lang.color }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="caption" component="div" color="text.secondary">
                    {`${lang.proficiency}%`}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {lang.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Languages;