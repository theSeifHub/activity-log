import React from 'react'
import { searchBarPlaceholder } from '../constants/texts'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='bg-neutral-100 rounded-t-2xl p-4'>
      <input
        placeholder={searchBarPlaceholder}
        className='bg-neutral-100 text-neutral-600 h-11 w-full px-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-400'
      />
    </div>
  )
}

export default SearchBar