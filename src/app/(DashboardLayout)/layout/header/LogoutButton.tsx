'use client'

import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <Button
      href="/"
      variant="outlined"
      color="primary"
      component={Link}
      fullWidth
      onClick={() => signOut()}
    >
      Keluar
    </Button>
  )
}

export default LogoutButton