import {useState} from 'react'
import countryData from '../resources/countryData.json'

function AutocompleteSearch() {

  const [filteredData, setFilteredData] = useState(countryData)
  const [searchText, setSearchText] = useState("")
  const [suggestions, setSuggestions] = useState(true)

  function handleChange(e) {
    setSearchText(e.target.value)
    const filtered = countryData.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setFilteredData(filtered)
    setSuggestions(true)
  }

  function handleEscape(e) {
    if (e.keyCode === 27) {
      setSuggestions(false)
      console.log('Escape')
    }
  }

  return (
    <div className='container'>
        <h1>Search</h1>
        <input type="text" onChange={handleChange} onKeyDown={handleEscape} list='suggestions' />
        <datalist id='suggestions'>{(suggestions || searchText) && filteredData.map((item, index) => (<option key={index} value={item.name}></option>))}</datalist>
        <button>search</button>
    </div>
  )
}

export default AutocompleteSearch