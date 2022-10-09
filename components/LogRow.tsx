import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi'
import { IEvent } from '../constants/DTO';
import DetailsBox from './DetailsBox';
import { formatDateToMMMdhm } from '../helpers/formatDate';

type Props = {
  event: IEvent
}

const LogRow = ({ event }: Props) => {
  const [showDetailsBox, setShowDetailsBox] = useState(false);

  return (
    showDetailsBox ? (
      <DetailsBox event={event} onClickClose={() => setShowDetailsBox(!showDetailsBox)} />
    ) : (
      <div className='flex justify-between h-14 relative'>
        <span className='px-3 pt-3 w-75'>
          <span
            className='inline-block text-center text-white w-6 h-6 mr-2 rounded-full'
            style={{background: 'linear-gradient(138.62deg, #F3994A 14.17%, #B325E2 84.99%)'}}
          >
           {event.actorName.charAt(0)} 
          </span>
          {event.actorName}</span>
        <span className='px-3 pt-3 w-75'>{event.actionName}</span>
        <span className='px-3 pt-3 w-75'>{formatDateToMMMdhm(event.occurredAt)}</span>
        <span className='absolute top-3 right-4'>
          <button type='button' onClick={() => setShowDetailsBox(!showDetailsBox)} title='Show details'>
            <BiChevronRight className='' size={30}/>
          </button>
        </span>
      </div>
    )
  )
}

export default LogRow