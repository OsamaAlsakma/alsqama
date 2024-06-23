import { Hotel } from "~/core/hotels/view/cards-section/wrapper/hotels-cards-wrapper";

export type HotelsResponse = {
  id: string;
  name: string;
  location: string;
  shortDescription: string;
  numberOfStars: number;
  phone: string;
};
export const getHotelsDTO = (response: HotelsResponse[]): Hotel[] => {
  return response.map((hotel: HotelsResponse) => {
    const hotelEntity: Hotel = {
      id: hotel.id,
      images: [],
      hotelName: hotel.name,
      location: hotel.location,
      phoneNumber: hotel.phone,
      description: hotel.shortDescription,
      numberOfStars: hotel.numberOfStars,
    };
    return hotelEntity;
  });
};
