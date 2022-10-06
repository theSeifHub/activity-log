import React, { useState } from 'react';
import Image from 'next/image';
import { IIncident } from '../constants/sample';
import DetailsBox from './DetailsBox';

type Props = {
  incident: IIncident
}

const LogRow = ({ incident }: Props) => {
  const [showDetailsBox, setShowDetailsBox] = useState(false);
  const formattedDate = incident.occurred_at.toLocaleDateString(undefined, {
    hour12: true,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    showDetailsBox ? (
      <DetailsBox incident={incident} onClickClose={() => setShowDetailsBox(!showDetailsBox)} />
    ) : (
      <tr className='h-14'>
        <td className='pl-3'>
          <span
            className='inline-block text-center text-white w-6 h-6 mr-3 rounded-full'
            style={{background: 'linear-gradient(138.62deg, #F3994A 14.17%, #B325E2 84.99%)'}}
          >
           {incident.actor_name.charAt(0)} 
          </span>
          {incident.target_name}</td>
        <td className='pl-3'>{incident.action.name}</td>
        <td className='pl-3'>{formattedDate}</td>
        <td className='pr-2'>
          <button type='button' onClick={() => setShowDetailsBox(!showDetailsBox)} title='Show details'>
            <Image
              src="/assets/images/greyChevron.png"
              alt="Open incident details"
              width={8}
              height={12}
            />
          </button>
        </td>
      </tr>
    )
  )
}

export default LogRow