import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  const [search, setSearch] = useState('');
  
  return (
    <>
    <Navbar val={search} handleChange={(e : React.ChangeEvent<HTMLInputElement>)=> setSearch(e.target.value)} />
    <Content search={search} />
    </>
  )
}

export default App
