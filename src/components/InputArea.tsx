import React, { useState } from 'react'

const InputArea = ({ setTerm, query, }) => {
    const [showRegion, setShowRegion] = useState(false)
    const regionShown = 'mt-2 text-sm  shadow pr-20 p-2 bg-white absolute  flex-col gap-3 rounded dark:bg-[#2B3945] dark:text-white'
    const regionNotShown = ' hidden'
    function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, answer: string, type: string) {
        setTerm((prev) => {
            return {
                ...prev,
                name: answer,
                type: type
            }
        })

        query.refetch()
        setShowRegion(!showRegion)
    }
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {

        let term = (event.target as HTMLInputElement).value
        if (event.key === 'Enter') {
            event.preventDefault();
            setTerm((prev) => {
                return {
                    ...prev,
                    name: term,
                    type: `search`
                }
            })
            query.refetch()


            if (event.key !== 'Enter') return


            console.log((event.target as HTMLInputElement).value);
            (event.target as HTMLInputElement).value = ``


        }
    };
    return (
        <section className="flex justify-between gap-4 mt-12 px-8 overflow-hidden">
            <div className='relative md:w-96'>
                <div>
                    <input
                        onKeyDown={(e) => handleKeyDown(e)} placeholder='Search by country...'
                        className='w-full h-full dark:bg-[#2B3945] dark:text-white
                 text-[#858585] text-sm shadow p-4 pl-12 rounded' /></div>
                <div className='absolute top-0 p-4'>
                    <svg className='fill-[#858585]' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.475 20.15 13.225 13.9Q12.475 14.525 11.5 14.875Q10.525 15.225 9.55 15.225Q7.125 15.225 5.463 13.562Q3.8 11.9 3.8 9.5Q3.8 7.1 5.463 5.437Q7.125 3.775 9.525 3.775Q11.925 3.775 13.6 5.437Q15.275 7.1 15.275 9.5Q15.275 10.55 14.9 11.525Q14.525 12.5 13.925 13.175L20.2 19.45ZM9.55 14.225Q11.525 14.225 12.9 12.863Q14.275 11.5 14.275 9.5Q14.275 7.5 12.9 6.137Q11.525 4.775 9.55 4.775Q7.55 4.775 6.175 6.137Q4.8 7.5 4.8 9.5Q4.8 11.5 6.175 12.863Q7.55 14.225 9.55 14.225Z" /></svg>
                </div>

            </div>
            <div>
                <div
                    onClick={() => setShowRegion(!showRegion)}
                    className='flex cursor-pointer gap-0 md:gap-2 text-sm bg-white shadow p-2  md:p-3 md:pt-4 justify-center rounded dark:bg-[#2B3945] dark:text-white'>
                    <div>Filter by region</div>
                    <div> <span className="material-symbols-outlined">
                        expand_more
                    </span></div>
                </div>
                <div className={
                    showRegion ? regionShown : regionNotShown
                }>
                    <div>
                        <button
                            onClick={(e) => clickHandler(e, `africa`, `region`)}
                        >Africa</button>
                    </div>
                    <div>
                        <button onClick={(e) => clickHandler(e, `america`, `region`)}>
                            America
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => clickHandler(e, `asia`, `region`)}>
                            Asia
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => clickHandler(e, `europe`, `region`)}
                        >Europe</button>
                    </div>
                    <div>
                        <button
                            onClick={(e) => clickHandler(e, `oceania`, `region`)}
                        >Oceania</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InputArea