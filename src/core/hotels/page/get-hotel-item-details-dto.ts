import { ReviewResponse } from "~/bootstrap/helper/global-types";
import { HotelItemDetailType } from "~/core/hotels/page/hotel-item-details-page";

export type HotelItemDetailsResponse = {
  id: string;
  room_number: string; // room name
  price: number;
  description: string;
  bookingConditions: string;
  cancellingConditions: string;
  images: { attachment_path: string }[];
  reservations: [];
  video: { url: string }[];
  reviews: ReviewResponse[];
  coordinates: {
    latitude: string;
    longitude: string;
  };
  features: { name: string }[];

  // fast description
  roomsNumber: string;
  bedsNumber: string;
  location: string;
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
    reviews: response.reviews.map((review) => ({
      givenStars: review.rating,
      reviewBody: review.comment,
      reviewerName: review.username || review.user?.name || "مقيم",
    })),
    reservedDates: response.reservations,
    roomsNumber: response.roomsNumber,
    bedsNumber: response.bedsNumber,
    location: response.location,
  };
};
