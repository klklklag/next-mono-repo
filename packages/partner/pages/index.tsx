import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@thanks/shared/components/buttons/TestButton';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button />
    </div>
  )
}

export default Home;