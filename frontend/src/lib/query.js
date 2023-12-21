export const HOTEL_QUERY =`
query{
  hotels{
    data{
      attributes{
        HotelName,
        Description,
        Image{
          data{
            attributes{
              width,
              url
            }
          }
        }
      }
    }
  }
}
`