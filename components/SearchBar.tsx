import React, { useState } from 'react'
import { searchBarPlaceholder } from '../constants/texts'

type Props = {
  handleFilter: (val: string) => void,
}

const SearchBar = ({ handleFilter }: Props) => {
  const [searchInputVal, setSearchInputVal] = useState('');
  return (
    <div className='bg-neutral-100 rounded-t-2xl p-4'>
      <div className='bg-neutral-100 text-neutral-600 h-11 w-full border-2 rounded-lg'>
        <input
          placeholder={searchBarPlaceholder}
          className='w-[90%] h-full px-3 bg-transparent focus:outline-none'
          value={searchInputVal}
          onChange={(e) => {
            e.preventDefault();
            setSearchInputVal(e.currentTarget.value);
          }} 
        />
        <button
          className='bg-transparent text-neutral-600 w-[10%] h-full border-l-2 border-gray-200'
          onClick={() => handleFilter(searchInputVal)}
        >FILTER</button>
      </div>
    </div>
  )
}

export default SearchBar