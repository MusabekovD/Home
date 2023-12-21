import { useQuery } from "urql";
import { HOTEL_QUERY } from "./query";

export const useFetch = ()=>{
    const [results] =  useQuery({query:HOTEL_QUERY})
    const {fetching, data, error} = results
    return results
}