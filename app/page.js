import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectList from './components/Projects/ProjectList'
import ExperienceList from './components/Experience/ExperienceList'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.constructionnotice}>
        WORK IN PROGRESS
      </div>
      Feel free to take a look!
      <Intro />
      <ProjectList />
      <ExperienceList />
    </main>
  )
}
