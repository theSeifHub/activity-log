import React, { useState } from 'react';
import Image from 'next/image';
import { IIncident } from '../constants/sample';
import DetailsBox from './DetailsBox';
import { formatDateToMMMdhm } from '../helpers/formatDate';

type Props = {
  incident: IIncident
}

const LogRow = ({ incident }: Props) => {
  const [showDetailsBox, setShowDetailsBox] = useState(false);

  return (
    showDetailsBox ? (
      <DetailsBox incident={incident} onClickClose={() => setShowDetailsBox(!showDetailsBox)} />
    ) : (
      <div className='flex justify-between h-14 relative'>
        <span className='grow px-3 pt-3'>
          <span
            className='inline-block text-center text-white w-6 h-6 mr-2 rounded-full'
            style={{background: 'linear-gradient(138.62deg, #F3994A 14.17%, #B325E2 84.99%)'}}
          >
           {incident.actor_name.charAt(0)} 
          </span>
          {incident.target_name}</span>
        <span className='grow pr-3 pt-3'>{incident.action.name}</span>
        <span className='grow pr-3 pt-3'>{formatDateToMMMdhm(incident.occurred_at)}</span>
        <span className='absolute top-3 right-4'>
          <button type='button' onClick={() => setShowDetailsBox(!showDetailsBox)} title='Show details'>
            <Image
              src="/assets/images/greyChevron.png"
              alt="Open incident details"
              width={8}
              height={12}
            />
          </button>
        </span>
      </div>
    )
  )
}

export default LogRow