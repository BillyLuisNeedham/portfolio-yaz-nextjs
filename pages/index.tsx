import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Button } from '../components/button'
import HeaderBar from '../components/headerBar'
import Link from 'next/link'

const Home = () => {
  const theme = useTheme()
  const hello = 'Hello'
  return (
    <div>
      <HeaderBar />
      <p>hello world</p>
    </div>
  )
}

export default Home
