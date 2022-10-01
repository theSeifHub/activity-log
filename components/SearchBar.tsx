import React from 'react'
import { searchBarPlaceholder } from '../constants/texts'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div>
      <form>
        <input placeholder={searchBarPlaceholder}/>
      </form>
    </div>
  )
}

export default SearchBar