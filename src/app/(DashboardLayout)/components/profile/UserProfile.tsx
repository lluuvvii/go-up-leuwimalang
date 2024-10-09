'use client'

import React, { useState } from 'react'
import { Avatar, Divider, Grid, Stack, Typography, Button, Box, CircularProgress, Collapse, DialogTitle, DialogContent, DialogActions, TextField, Dialog } from '@mui/material'
import DashboardCard from '../shared/DashboardCard'
import { useSession } from 'next-auth/react'

const UserProfile = () => {
  const { data: session }: any = useSession()

  return (
    <DashboardCard title="Profil" subtitle="Data Pribadi Anda">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        divider={<Divider orientation="vertical" sx={{ borderWidth: '2px' }} flexItem />}
        spacing={2}
        alignItems="center"
      >
        {/* Avatar */}
        <Stack direction="column" spacing={2} alignItems="center">
          <Avatar sx={{ width: 100, height: 100 }} src={session?.user.image} alt={session?.user.name} />
        </Stack>

        {/* Data Pribadi */}
        <Grid item>
          {/* <Stack direction="column" spacing={2}> */}
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={1}>
                <Typography variant="body1">Username: </Typography>
                <Typography variant="body1">{session?.user.name}</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography variant="body1">Email: </Typography>
                <Typography variant="body1">{session?.user.email}</Typography>
              </Stack>
            </Stack>
          {/* </Stack> */}
        </Grid>
      </Stack>
    </DashboardCard>
  )
}

export default UserProfile
