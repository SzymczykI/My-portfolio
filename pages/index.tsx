import type { NextPage } from 'next'
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Navbar />   
      <Header />
      <section id="about">  
      <About />
      </section>
      <section id="works">  
      <Projects />
      </section>
      <section id="contact">  
      <Contact />
      </section>
      </main>
    </div>
  )
}

export default Home
