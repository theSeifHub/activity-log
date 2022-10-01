import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LogTable from '../components/LogTable'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Activity Log</title>
        <meta name="description" content="Activity Log Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <SearchBar/>
          <LogTable/>
        </div>
      </main>
    </div>
  )
}

export default Home
