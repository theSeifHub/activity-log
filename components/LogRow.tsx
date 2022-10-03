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
      <tr>
        <td>{incident.actor_name}</td>
        <td>{incident.action.name}</td>
        <td>{formattedDate}</td>
        <td>
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