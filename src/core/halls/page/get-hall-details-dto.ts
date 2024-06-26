import { HallDetailType } from "~/core/halls/page/hall-details-page";

export type HallDetailsResponse = {
  accommodation: {
    id: string;
    name: string;
    location?: string;
    description: string;
    numberOfRooms?: string; // capacity
    pricePerNight: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    images: { attachmentPath: string }[];
    video: { url: string }[];
    features: { name: string }[];
    bookingConditions: string;
    cancellingConditions: string;

    // TODO he needs to add
    // reservations:ResservedDateType[]
  };
};

export const getHallDetailsDTO = (
  response: HallDetailsResponse
): HallDetailType => {
  const HallDetailEntity: HallDetailType = {
    id: response.accommodation.id,
    name: response.accommodation.name,
    images: response.accommodation.images.map((image) => image.attachmentPath),
    videos: response.accommodation.video.map((video) => video.url),
    description: response.accommodation.description,
    coordinates: {
      latitude: response.accommodation.coordinates.latitude,
      longitude: response.accommodation.coordinates.longitude,
    },
    features: response.accommodation.features.map((feature) => feature.name),
    bookingConditions: response.accommodation.bookingConditions,
    cancellingConditions: response.accommodation.cancellingConditions,

    // fast description
    capacity: response.accommodation.numberOfRooms,
    location: response.accommodation.location,
    pricePerNight: response.accommodation.pricePerNight,

    // TODO to be fixed
    reviews: [],
    reservedDates: [],
  };
  return HallDetailEntity;
};
