import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import { HotelItemDetailType } from "~/core/hotels/page/hotel-item-details-page";

export type HotelItemDetailsResponse = {
  id: string;
  room_number: string; // room name
  accommodation_id: 1;
  price: number;
  description: string;
  bookingConditions: string;
  cancellingConditions: string;
  images: { attachment_path: string }[];
  reservations: [];
  video: { url: string }[];
  reviews: ReviewType[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  features: { name: string }[];
};
export const getHotelItemDetailsDTO = (
  response: HotelItemDetailsResponse
): HotelItemDetailType => {
  return {
    id: response.id,
    name: response.room_number,
    description: response.description,
    pricePerNight: response.price,
    coordinates: response.coordinates,
    images: response.images.map((image) => image.attachment_path),
    videos: response.video.map((video) => video.url),
    bookingConditions: response.bookingConditions,
    cancellingConditions: response.cancellingConditions,
    features: response.features.map((feature) => feature.name),
    reviews: response.reviews,
    reservedDates: response.reservations,
  };
};
