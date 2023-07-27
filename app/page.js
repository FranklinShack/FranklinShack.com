import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectList from './components/Projects/ProjectList'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.constructionnotice}>
        UNDER CONSTRUCTION
      </div>
      <Intro />

      <ProjectList />
    </main>
  )
}
