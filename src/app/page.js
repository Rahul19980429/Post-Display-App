'use client'
import styles from './page.module.css'
import Post from './post'
export default function Home() {
  return (
    <main className={styles.main}>
      <Post/>
    </main>
  )
}
