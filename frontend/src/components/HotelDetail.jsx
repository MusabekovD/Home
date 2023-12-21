import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {HOTEL_QUERY} from "../lib/query"



const HotelDetail = ({images}) => {

  const {slug}  = useParams();
  return (
    <div>
      <h1>Hotel Name : {} </h1>
      <h1>Hotel Body :</h1>
    </div>
  );
};

export default HotelDetail;
