import React from 'react';
import Image from 'next/image';
import { IEvent } from '../constants/DTO';
import { formatDateToMMMdhm } from '../helpers/formatDate';

type Props = {
  event: IEvent,
  onClickClose: () => void,
}

const DetailsBox = ({ event, onClickClose }: Props) => {
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
            <span>{event.actorName}</span>
            <span>{event.actorGroup}</span>
            <span>{event.actorId}</span>
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
            <span>{event.metadataRedirect}</span>
            <span>{event.metadataDescription}</span>
            <span>{event.metadataXRequestId}</span>
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
              <span>{event.actionName}</span>
              <span>{event.actionObject}</span>
              <span>{event.actionId}</span>
            </div>
          </div>
          <h3 className='text-gray-400 font-semibold'>TARGET</h3>
          <div className='flex flex-row space-x-9 mt-4 mb-9'>
            <div className='flex flex-col'>
              <span className='text-gray-400'>Name</span>
              <span className='text-gray-400'>ID</span>
            </div>
            <div className='flex flex-col'>
              <span>{event.targetName}</span>
              <span>{event.targetId}</span>
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
              <span>{formatDateToMMMdhm(event.occurredAt)}</span>
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