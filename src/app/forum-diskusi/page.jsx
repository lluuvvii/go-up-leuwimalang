'use client';

import {
  AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText,
  Box, Container, Card, CardContent, TextField, Button, Avatar, Divider, Badge
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

export default function ForumPage() {
  return (
    <Box sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: '#629A1A', boxShadow: 3 }}>
        <Toolbar>
          <ForumIcon sx={{ color: 'white', mr: 2, fontSize: '2rem' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
            Forum Diskusi
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Layout */}
      <Box display="flex">
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: '#4E7C2A',
              color: '#FFFFFF',
              borderRight: '1px solid #ddd',
            },
          }}
        >
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem button>
                <HomeIcon sx={{ color: 'white', mr: 2, fontSize: '1.5rem' }} />
                <ListItemText primary="Home" sx={{ color: '#FFFFFF', fontWeight: 'bold' }} />
              </ListItem>
              <ListItem button>
                <ForumIcon sx={{ color: 'white', mr: 2, fontSize: '1.5rem' }} />
                <ListItemText primary="Diskusi" sx={{ color: '#FFFFFF', fontWeight: 'bold' }} />
              </ListItem>
              <ListItem button>
                <PersonIcon sx={{ color: 'white', mr: 2, fontSize: '1.5rem' }} />
                <ListItemText primary="Profil" sx={{ color: '#FFFFFF', fontWeight: 'bold' }} />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Container component="main" sx={{ flexGrow: 1, minHeight: '100vh', padding: '32px', backgroundColor: '#f9f9f9' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#629A1A', fontWeight: 'bold' }}>
            Forum Diskusi
          </Typography>

          {/* Discussion Card */}
          <Card sx={{ mb: 3, boxShadow: 6, borderRadius: 2 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar alt="User" src="/static/images/avatar/1.jpg" sx={{ mr: 2 }} />
                <Typography variant="h6" sx={{ color: '#629A1A', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  Judul Diskusi
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Deskripsi atau topik diskusi ini membahas berbagai ide menarik dan kreatif.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Badge badgeContent={3} color="success">
                <Typography variant="body2" sx={{ color: '#629A1A', cursor: 'pointer', fontWeight: 'bold' }}>
                  Lihat semua komentar
                </Typography>
              </Badge>
            </CardContent>
          </Card>

          {/* Add Comment Section */}
          <Typography variant="h6" gutterBottom sx={{ color: '#629A1A', fontWeight: 'bold' }}>
            Tambahkan Komentar
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Tulis komentar Anda di sini..."
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#629A1A' },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#629A1A',
              '&:hover': { backgroundColor: '#507715' },
              boxShadow: 3,
              px: 5,
              py: 1.5,
              borderRadius: 20,
              fontSize: '1rem',
            }}
          >
            Kirim
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: 'center',
          backgroundColor: '#4E7C2A',
          color: '#FFFFFF',
          marginTop: 'auto',
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
          © 2024 Forum Diskusi. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
