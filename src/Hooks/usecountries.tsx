import { useQuery } from "react-query"

export function useCountries(region: string){
    const query = useQuery(`Countries`, async () =>{
        const response = await fetch(`https://restcountries.com/v3.1/${region !==`` ? `region/${region}` : 'all'}`)
        const data = await response.json()
        return data
    })
    return query
}