import React from 'react'
import { SAMPLE_DATA } from '../constants/sample'
import LogRow from './LogRow'

type Props = {}

const LogTable = (props: Props) => {
  return (
    <table>
      <tr>
        <th>Actor</th>
        <th>Action</th>
        <th>Date</th>
      </tr>
      <LogRow incident={SAMPLE_DATA} />
      <LogRow incident={SAMPLE_DATA} />
    </table>
  )
}

export default LogTable