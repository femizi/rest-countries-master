import React, { useState } from 'react'
import { useQuery } from 'react-query'
import CountrySmall from './CountrySmall'
import Header from './Header'
import InputArea from './InputArea'

const MainScreenComposer = ({ setScreenShown, setMode, mode }) => {
  const [term, setTerm] = useState("https://restcountries.com/v3.1/all")
  const query = useQuery('allResult', () =>
    fetch(term, {
      method: 'GET'
    }).then(res =>
      res.json()

    ))

  return (
    <div >
      <Header setMode={setMode} mode={mode} />
      <InputArea setTerm={setTerm} term={term} query={query} />
      <main className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 mt-4 px-8">
        {query.isLoading ? <div>Loading...</div>
          : query.isError ? <div>Error{query.isError}</div> :query.data.map((country: { name: any; flags: { png: any }; capital: string; population: string; region: string }, index) => (
              <CountrySmall setScreenShown={setScreenShown}
                key={index} png={country.flags.png} capital={country.capital} population={country.population} name={country.name.official} region={country.region} />))}
      </main>
    </div>
  )
}

export default MainScreenComposer