import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import { HotelItemDetailType } from "~/core/hotels/page/hotel-item-details-page";

export type HotelItemDetailsResponse = {
  accommodation: {
    id: string;
    room_number: string; // room name
    accommodation_id: 1;
    price: number;
    description: string;
    bookingConditions: string;
    cancellingConditions: string;
    images: { attachmentPath: string }[];
    reservations: [];
    video: { url: string }[];
    reviews: ReviewType[];
    coordinates: {
      latitude: number;
      longitude: number;
    };
    features: { name: string }[];

    // fast description
    roomsNumber: string;
    bedsNumber: string;
    location: string;
  };
};
export const getHotelItemDetailsDTO = (
  response: HotelItemDetailsResponse
): HotelItemDetailType => {
  return {
    id: response.accommodation.id,
    name: response.accommodation.room_number,
    description: response.accommodation.description,
    pricePerNight: response.accommodation.price,
    coordinates: response.accommodation.coordinates,
    images: response.accommodation.images.map((image) => image.attachmentPath),
    videos: response.accommodation.video.map((video) => video.url),
    bookingConditions: response.accommodation.bookingConditions,
    cancellingConditions: response.accommodation.cancellingConditions,
    features: response.accommodation.features.map((feature) => feature.name),
    reviews: response.accommodation.reviews,
    reservedDates: response.accommodation.reservations,
    roomsNumber: response.accommodation.roomsNumber,
    bedsNumber: response.accommodation.bedsNumber,
    // TODO
    location: response.accommodation.location,
  };
};
