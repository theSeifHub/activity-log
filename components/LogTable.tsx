import React from 'react'
import { SAMPLE_DATA } from '../constants/sample'
import LogRow from './LogRow'

type Props = {}

const LogTable = (props: Props) => {
  return (
    <div className='flex flex-col h-full border-2 border-t-0 border-neutral-100 rounded-b-2xl'>
        <div className='flex justify-between bg-neutral-100 h-16'>
          <span className='grow text-neutral-600 text-left pl-4 pt-4'>ACTOR</span>
          <span className='grow text-neutral-600 text-left pl-5 pt-4'>ACTION</span>
          <span className='grow text-neutral-600 text-left pl-5 pt-4'>DATE</span>
        </div>
        <LogRow incident={SAMPLE_DATA} />
        <LogRow incident={SAMPLE_DATA} />
        <LogRow incident={SAMPLE_DATA} />
        <LogRow incident={SAMPLE_DATA} />
    </div>
  )
}

export default LogTable