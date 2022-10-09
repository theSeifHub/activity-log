import React, { useState } from 'react'
import { BiFilter } from 'react-icons/bi';
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
          className='w-[85%] h-full px-3 bg-transparent focus:outline-none'
          value={searchInputVal}
          onChange={(e) => {
            e.preventDefault();
            setSearchInputVal(e.currentTarget.value);
          }} 
        />
        <button
          className='relative bg-transparent text-neutral-600 w-[15%] h-full border-l-2 border-gray-200'
          onClick={() => handleFilter(searchInputVal)}
        >
          <BiFilter className='absolute left-2.5 top-2' size={25}/>
          FILTER
        </button>
      </div>
    </div>
  )
}

export default SearchBar