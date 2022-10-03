import React from 'react';
import Image from 'next/image';
import { IIncident } from '../constants/sample';

type Props = {
  incident: IIncident,
  onClickClose: () => void,
}

const DetailsBox = ({ incident, onClickClose }: Props) => {
  return (
    <div>
      <button type='button' onClick={onClickClose} title='Hide details'>
        <Image src='/assets/images/close.png' alt='Close details box' width={25} height={25} />
      </button>
      <div>
        <h3>ACTOR</h3>
        <div></div>
      </div>
      <div>
        <h3>ACTION</h3>
      </div>
      <div>
        <h3>DATE</h3>
      </div>
      <div>
        <h3>METADATA</h3>
      </div>
      <div>
        <h3>TARGET</h3>
      </div>
    </div>
  )
}

export default DetailsBox