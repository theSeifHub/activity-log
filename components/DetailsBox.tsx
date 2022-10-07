import React from 'react';
import Image from 'next/image';
import { IIncident } from '../constants/sample';
import { formatDateToMMMdhm } from '../helpers/formatDate';

type Props = {
  incident: IIncident,
  onClickClose: () => void,
}

const DetailsBox = ({ incident, onClickClose }: Props) => {
  return (
    <div className='
      flex justify-between self-center w-[105%] h-80 py-7 px-9
      bg-white border-2 border-neutral-300 rounded-xl relative
    '>
      <div className='grow'>
        <h3 className='text-gray-400 font-semibold'>ACTOR</h3>
        <div className='flex flex-row space-x-9 mt-4 mb-9'>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Name</span>
            <span className='text-gray-400'>Group</span>
            <span className='text-gray-400'>ID</span>
          </div>
          <div className='flex flex-col'>
            <span>{incident.actor_name}</span>
            <span>{incident.group}</span>
            <span>{incident.actor_id}</span>
          </div>
        </div>
        <h3 className='text-gray-400 font-semibold'>METADATA</h3>
        <div className='flex flex-row space-x-9 mt-4 mb-9'>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Redirect</span>
            <span className='text-gray-400'>Description</span>
            <span className='text-gray-400'>X Request ID</span>
          </div>
          <div className='flex flex-col'>
            <span>{incident.metadata.redirect}</span>
            <span>{incident.metadata.description}</span>
            <span>{incident.metadata.x_request_id}</span>
          </div>
        </div>
      </div>
      {/* ************************************** */}
        <div className='grow '>
          <h3 className='text-gray-400 font-semibold'>ACTION</h3>
          <div className='flex flex-row space-x-9 mt-4 mb-9'>
            <div className='flex flex-col'>
              <span className='text-gray-400'>Name</span>
              <span className='text-gray-400'>Object</span>
              <span className='text-gray-400'>ID</span>
            </div>
            <div className='flex flex-col'>
              <span>{incident.action.name}</span>
              <span>{incident.action.object}</span>
              <span>{incident.action.id}</span>
            </div>
          </div>
          <h3 className='text-gray-400 font-semibold'>TARGET</h3>
          <div className='flex flex-row space-x-9 mt-4 mb-9'>
            <div className='flex flex-col'>
              <span className='text-gray-400'>Name</span>
              <span className='text-gray-400'>ID</span>
            </div>
            <div className='flex flex-col'>
              <span>{incident.target_name}</span>
              <span>{incident.target_id}</span>
            </div>
          </div>
        </div>
      {/* ************************************** */}
        <div className='grow'>
          <h3 className='text-gray-400 font-semibold'>DATE</h3>
          <div className='flex flex-row space-x-9 mt-4 mb-9'>
            <div className='flex flex-col'>
              <span className='text-gray-400'>Readable</span>
            </div>
            <div className='flex flex-col'>
              <span>{formatDateToMMMdhm(incident.occurred_at)}</span>
            </div>
          </div>
        </div>
      {/* ************************************** */}
      <div className='absolute top-2 right-4'>
        <button type='button' onClick={onClickClose} title='Hide details'>
          <Image
            src='/assets/images/close.png'
            alt='Close details box'
            width={14} height={14}
          />
        </button>
      </div>
    </div>
  )
}

export default DetailsBox