import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { Home, Layout, Shopping } from '../components'
import styles from '../styles/Home.module.css'


export default function Index() {
  return (
    <Layout
      title="Inicio"
    >
      <Home/>
      <Shopping/>
    </Layout>
  )
}
