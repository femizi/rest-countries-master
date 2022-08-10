import React from 'react'
import { useQuery } from 'react-query'
import BackButton from './BackButton'
import DetailsImage from './DetailsImage'
import DetailsText from './DetailsText'
import Header from './Header'
import Loader from './Loader'

const DetailsComposer = ({setScreenShown, setMode, mode, details}) => {
    const query = useQuery(`details`, async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${details}`)
        const data = await response.json()
        
        return data})
        console.log(query)
    return (
        <div>
            <Header setMode={setMode} mode={mode} />
            <div className='mr-auto ml-8 my-6'>
               <BackButton setScreenShown={setScreenShown}/>
            </div>
            <main>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 px-8'>
               {query.isLoading ?<> <Loader/> <Loader/></> :
               query.isError ? <div className='grid place-content-center p-8'>Error{query.isError}</div> :
               <>
                  <DetailsImage png={query.data[0].flags.png}/>
                    <DetailsText country={query.data[0]}/>
                   
               </>}
                </div>
            </main>
        </div>
    )
}

export default DetailsComposer