import type { NextPage } from 'next'
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Works from '../src/components/Works';
import Contact from '../src/components/Contact';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Navbar />   
      <Header />
      <About />
      <Works />
      <Contact />
      </main>
    </div>
  )
}

export default Home
