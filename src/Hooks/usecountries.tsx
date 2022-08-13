import axios from "axios"
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
       
        
        
        const data = await axios.get(url())
        console.log(data.data)
        return data
    })
    return query
}