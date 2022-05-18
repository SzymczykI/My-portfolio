import type { NextPage } from 'next'
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
      <Navbar />   
      <Header />
      </main>
    </div>
  )
}

export default Home
