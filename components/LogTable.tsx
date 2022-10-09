import React, { useState } from 'react'
import { IEvent } from '../constants/DTO'
import Footer from './Footer'
import LogRow from './LogRow'

type Props = {
  tableData: any,
  loadMore: () => void,
}

const LogTable = ({tableData, loadMore}: Props) => {
  return (
    <div className='flex flex-col h-full border-2 border-t-0 border-neutral-100 rounded-b-2xl'>
        <div className='flex justify-between bg-neutral-100 h-16'>
          <span className='grow text-neutral-600 text-left pl-4 pt-4'>ACTOR</span>
          <span className='grow text-neutral-600 text-left pl-5 pt-4'>ACTION</span>
          <span className='grow text-neutral-600 text-left pl-5 pt-4'>DATE</span>
        </div>
        {tableData && tableData.map((evt: IEvent) => <LogRow event={evt} key={evt.id} />)}
        <Footer onClickLoadMore={loadMore}/>
    </div>
  )
}

export default LogTable