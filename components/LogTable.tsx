import React from 'react'
import { SAMPLE_DATA } from '../constants/sample'
import LogRow from './LogRow'

type Props = {}

const LogTable = (props: Props) => {
  return (
    <div className='h-full border-2 border-t-0 border-neutral-100 rounded-b-2xl'>
      <table className='w-full'>
        <tr className='bg-neutral-100 h-16'>
          <th className='text-neutral-600 text-left pl-3'>ACTOR</th>
          <th className='text-neutral-600 text-left pl-3'>ACTION</th>
          <th className='text-neutral-600 text-left pl-3'>DATE</th>
          <th />
        </tr>
        <LogRow incident={SAMPLE_DATA} />
        <LogRow incident={SAMPLE_DATA} />
        <LogRow incident={SAMPLE_DATA} />
        <LogRow incident={SAMPLE_DATA} />
      </table>
    </div>
  )
}

export default LogTable