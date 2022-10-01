import React from 'react';

type Props = {
  actor: string;
  action: string;
  date: Date;
}

const LogRow = (props: Props) => {
  const dateFormatOptions = {
    dateStyle: "short",
    hour12: true,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = props.date.toLocaleDateString(undefined, {
    hour12: true,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <tr>
      <td>{props.actor}</td>
      <td>{props.action}</td>
      <td>{formattedDate}</td>
    </tr>
  )
}

export default LogRow