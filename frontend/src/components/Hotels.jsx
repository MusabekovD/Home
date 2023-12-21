import {HOTEL_QUERY} from "../lib/query"
import { useQuery } from "urql";
import BookingCard from "./BookingCard";
import { useFetch } from "../lib/useFetch";


const Hotels = () => {
  const {fetching, error, data} = useFetch()
if (fetching) return <div>Загрузка...</div>;
if (error) return <div>Ошибка: {data.error.message}</div>;
const hotels = data.hotels.data

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex  flex-wrap items-center justify-start gap-[50px]">
        {hotels.map((hotel) => (
          <BookingCard hotel={hotel}  />      
        ))}   
     
      </div>
    </div>
  );
};

export default Hotels;
