import React from 'react'
import { FiLoader } from 'react-icons/fi'
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
          <span className='w-75 text-neutral-600 text-left pl-4 pt-4'>ACTOR</span>
          <span className='w-75 text-neutral-600 text-left pl-4 pt-4'>ACTION</span>
          <span className='w-75 text-neutral-600 text-left pl-4 pt-4'>DATE</span>
        </div>
        {tableData ? (
          tableData.length ? (
            tableData.map((evt: IEvent) => <LogRow event={evt} key={evt.id} />)
          ) : (
            <div className='text-2xl text-gray-600 h-96 w-full flex items-center justify-center'>
              NO EVENTS FOUND
            </div>
          )
        ) : (
          <div className='h-96 w-full flex items-center justify-center'>
            <FiLoader className='text-gray-400' size={60}/>
          </div>
        )}
        <Footer onClickLoadMore={loadMore}/>
    </div>
  )
}

export default LogTable