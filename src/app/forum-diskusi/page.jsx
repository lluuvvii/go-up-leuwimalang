'use client';

import {
  AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText,
  Box, Container, Card, CardContent, TextField, Button
} from '@mui/material';

export default function ForumPage() {
  return (
    <Box sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
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
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#629A1A', color: '#FFFFFF' },
          }}
        >
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem button>
                <ListItemText primary="Home" sx={{ color: '#FFFFFF' }} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Diskusi" sx={{ color: '#FFFFFF' }} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Profil" sx={{ color: '#FFFFFF' }} />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Container component="main" sx={{ flexGrow: 1, minHeight: '100vh', padding: '16px' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#629A1A' }}>
            Forum Diskusi
          </Typography>
          <Card sx={{ mb: 3, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#629A1A' }}>
                Judul Diskusi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Deskripsi atau topik diskusi.
              </Typography>
            </CardContent>
          </Card>
          <Typography variant="h6" gutterBottom sx={{ color: '#629A1A' }}>
            Tambahkan Komentar
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Tulis komentar Anda di sini..."
            sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#629A1A' } } }}
          />
          <Button variant="contained" sx={{ backgroundColor: '#629A1A', '&:hover': { backgroundColor: '#507715' } }}>
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
          backgroundColor: '#629A1A',
          color: '#FFFFFF',
          marginTop: 'auto',
        }}
      >
        <Typography variant="body2">© 2024 Forum Diskusi. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
