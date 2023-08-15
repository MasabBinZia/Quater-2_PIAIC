'use client'
import { ThemeContext } from '@/app/layout'
import React, { useContext } from 'react'

const Context = () => {
    const theme =useContext(ThemeContext)
  return (
    <div>{theme}</div>
  )
}

export default Context