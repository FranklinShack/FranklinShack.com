import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.constructionnotice}>
        UNDER CONSTRUCTION
      </div>
      
      <Intro />
    </main>
  )
}
