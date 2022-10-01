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
      <LogRow
        actor={SAMPLE_DATA.actor_name}
        action={SAMPLE_DATA.action.name}
        date={new Date(SAMPLE_DATA.occurred_at)}
      />
      <LogRow
        actor={SAMPLE_DATA.actor_name}
        action={SAMPLE_DATA.action.name}
        date={new Date(SAMPLE_DATA.occurred_at)}
      />
    </table>
  )
}

export default LogTable