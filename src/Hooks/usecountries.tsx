import { useQuery } from "react-query"

export function useCountries(term: string, type?: string) {
    const query = useQuery([`Countries`, term, type], async () =>{
       
       
        function url (){
          
            if (type  === `region`) {
               return `https://restcountries.com/v3.1/region/${term}`}
                else if (type === `search`) {
                  return  `https://restcountries.com/v3.1/name/${term}`
                }else{
                   return  `https://restcountries.com/v3.1/all`
                }
        }
       
        console.log(url())
        const response = await fetch(url())
        const data = await response.json()
        return data
    })
    return query
}