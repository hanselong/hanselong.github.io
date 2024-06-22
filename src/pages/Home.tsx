// src/pages/Home.tsx
import React from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h2" gutterBottom>
        Welcome to My App
      </Typography>
      <Typography variant="body1" paragraph>
        This is a sample application using Material-UI.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Feature One</Typography>
            <Typography variant="body2">Description of feature one.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Feature Two</Typography>
            <Typography variant="body2">Description of feature two.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
