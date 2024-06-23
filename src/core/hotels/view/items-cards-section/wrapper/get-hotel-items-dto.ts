import { HotelItem } from "~/core/hotels/view/items-cards-section/wrapper/hotel-items-cards-wrapper";

export type HotelItemResponse = {
  id: string;
  room_number: string; //hotel item name
  bedsNumber: string;
  roomsNumber: string;
  price: number;
};
export const getHotelItemsDTO = (
  hotelItemsResponse: HotelItemResponse[]
): HotelItem[] => {
  return hotelItemsResponse.map((hotelItemResponse: HotelItemResponse) => {
    const hotelItem: HotelItem = {
      id: hotelItemResponse.id,
      title: hotelItemResponse.room_number,
      bedsNumber: hotelItemResponse.bedsNumber,
      roomsNumber: hotelItemResponse.roomsNumber,
      pricePerNight: hotelItemResponse.price,

      // TODO
      reservedDates: [],
      images: [],
    };
    return hotelItem;
  });
};
