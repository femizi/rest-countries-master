import React from 'react'
import BackButton from './BackButton'
import DetailsImage from './DetailsImage'
import DetailsText from './DetailsText'
import Header from './Header'

const DetailsComposer = ({setScreenShown}) => {
    return (
        <div>
            <Header />
            <div className='mr-auto ml-8 my-6'>
               <BackButton setScreenShown={setScreenShown}/>
            </div>
            <main>
                <div className='grid grid-cols-2 gap-10 mt-4 px-8'>
                  <DetailsImage/>
                    <DetailsText/>
                </div>
            </main>
        </div>
    )
}

export default DetailsComposer