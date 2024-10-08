import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const LogoutButton = () => {
  return (
    <Button
      href="/authentication/login"
      variant="outlined"
      color="primary"
      component={Link}
      fullWidth
      onClick={() => localStorage.removeItem('token')}
    >
      Keluar
    </Button>
  )
}

export default LogoutButton