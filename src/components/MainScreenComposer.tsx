import React, { useState } from 'react'
import { useCountries } from '../Hooks/usecountries'
import CountrySmall from './CountrySmall'
import Header from './Header'
import InputArea from './InputArea'
import Loader from './Loader'

const MainScreenComposer = ({ setScreenShown, setMode, mode, setDetails }) => {
  
  const [term, setTerm] = useState({
    name: ``,
    type: ``
  })
 console.log(term)

  const query = useCountries(term.name, term.type)
 

  return (
    <div >
      <Header setMode={setMode} mode={mode} />
      <InputArea setTerm={setTerm}   query={query} />
      <main className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 mt-4 px-8">
        {query.isLoading ? <Loader/>
          :query.isRefetching?<Loader/>: query.isError ? <div className='grid place-content-center p-8'>Error{query.isError}</div> :query.data.map((country: { name: any; flags: { png: any }; capital: string; population: string; region: string }, index) => (
              <CountrySmall setScreenShown={setScreenShown} setDetails={setDetails} commonName={country.name.common}
                key={index} png={country.flags.png} capital={country.capital} population={country.population} name={country.name.official} region={country.region} />))}
      </main>
    </div>
  )
}

export default MainScreenComposer