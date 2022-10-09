import { useState } from 'react'
import type { NextPage } from 'next'
import useSWR from 'swr'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LogTable from '../components/LogTable'
import { getEvents } from '../helpers/fetcher'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  const [pages, setPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useSWR(`/events?page=${pages}&q=${searchQuery}`, getEvents);
  return (
    <div className={styles.container}>
      <Head>
        <title>Instalog</title>
        <meta name="description" content="Activity Log Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen pt-16 px-16'>
        <SearchBar handleFilter={(val: string) => setSearchQuery(val)}/>
        <LogTable
          tableData={data}
          loadMore={()=> setPages(pages + 1)}
        />
      </main>
    </div>
  )
}

export default Home
