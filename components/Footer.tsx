import React from 'react'

type Props = {
  onClickLoadMore: () => void,
}

const Footer = ({ onClickLoadMore }: Props) => {
  return (
    <div className='flex place-center bg-neutral-100 h-14 rounded-b-2xl'>
      <button
        className='text-neutral-600 self-center m-auto'
        onClick={onClickLoadMore}
      >LOAD MORE</button>
    </div>
  )
}

export default Footer