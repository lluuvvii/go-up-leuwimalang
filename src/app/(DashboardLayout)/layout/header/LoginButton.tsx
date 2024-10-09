'use client'

import { Button } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { signIn, getProviders, LiteralUnion, ClientSafeProvider } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers';

const LoginButton = () => {
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
  }, [])


  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => signIn("google")}
      >
        Masuk
      </Button>
    </>
  )
}

export default LoginButton