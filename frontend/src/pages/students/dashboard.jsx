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
} from '@mui/material';
import {
  Menu as MenuIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    education: 'Computer Science',
    avatar: 'https://via.placeholder.com/150',
  });

  const jobPostings = [
    {
      id: 1,
      company: 'Tech Corp',
      position: 'Software Developer Intern',
      location: 'New York, NY',
      description: 'Looking for a motivated intern to join our development team...',
    },
    {
      id: 2,
      company: 'Data Systems',
      position: 'Data Science Intern',
      location: 'San Francisco, CA',
      description: 'Join our data science team to work on exciting projects...',
    },
  ];

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
            Student Dashboard
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
              src={userInfo.avatar}
              sx={{ width: 80, height: 80, mb: 1 }}
            />
            <Typography variant="h6">{userInfo.name}</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={userInfo.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={userInfo.education} />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" sx={{ mb: 4 }}>
          Available Internships
        </Typography>
        <Grid container spacing={3}>
          {jobPostings.map((job) => (
            <Grid item xs={12} md={6} key={job.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    {job.position}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {job.company} • {job.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {job.description}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<WorkIcon />}
                    onClick={() => console.log(`Applied to ${job.position}`)}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
