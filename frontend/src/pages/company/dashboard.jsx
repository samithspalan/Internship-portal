import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Button,
  Grid,
  Avatar,
  TextField,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  Email as EmailIcon,
  Add as AddIcon,
} from '@mui/icons-material';

function CompanyDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [companyInfo] = useState({
    name: 'Tech Corp',
    email: 'hr@techcorp.com',
    industry: 'Technology',
    avatar: 'https://via.placeholder.com/150',
  });

  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      position: 'Software Developer Intern',
      location: 'New York, NY',
      description: 'Looking for a motivated intern to join our development team...',
      applicants: 5,
    },
    {
      id: 2,
      position: 'Data Science Intern',
      location: 'San Francisco, CA',
      description: 'Join our data science team to work on exciting projects...',
      applicants: 3,
    },
  ]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Company Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', p: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Avatar
              src={companyInfo.avatar}
              sx={{ width: 80, height: 80, mb: 1 }}
            />
            <Typography variant="h6">{companyInfo.name}</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Company Profile" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={companyInfo.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={companyInfo.industry} />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4">
            Job Postings
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => console.log('Add new job posting')}
          >
            Post New Job
          </Button>
        </Box>
        <Grid container spacing={3}>
          {jobPostings.map((job) => (
            <Grid item xs={12} md={6} key={job.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    {job.position}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {job.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {job.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      {job.applicants} Applicants
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => console.log(`View applicants for ${job.position}`)}
                    >
                      View Applicants
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CompanyDashboard; 