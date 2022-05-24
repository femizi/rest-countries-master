import React from 'react'
import CountrySmall from './CountrySmall'
import Header from './Header'
import InputArea from './InputArea'

const MainScreenComposer = ({setScreenShown}) => {
  return (
    <div >
    <Header />
    <InputArea />
    <main className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 mt-4 px-8">
      <CountrySmall setScreenShown={setScreenShown} />
      <CountrySmall setScreenShown={setScreenShown} />
      <CountrySmall setScreenShown={setScreenShown} />
      <CountrySmall setScreenShown={setScreenShown} />
      <CountrySmall setScreenShown={setScreenShown} />
      <CountrySmall setScreenShown={setScreenShown} />
      <CountrySmall setScreenShown={setScreenShown} />
    </main>
  </div>
  )
}

export default MainScreenComposer