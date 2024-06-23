import { ChaletSectionType } from "~/core/chalets/page/chalet-details-page";

export type ChaletSectionsResponse = {
  id: string;
  name: string;
  accommodation_id: 5;
  pricePerNight: number;
  description: string;
  latitude: number;
  longitude: number;
  bookingConditions: string;
  cancellingConditions: string;
  images: { attachment_path: string }[];
  video: { url: string }[];

  // TODO for fast description
  numberOfStars: 4;
  numberOfRooms: 45;
};
export const getChaletSectionsDTO = (
  response: ChaletSectionsResponse[]
): ChaletSectionType[] => {
  return response.map((chaletSection: ChaletSectionsResponse) => {
    const chaletSectionEntity: ChaletSectionType = {
      id: chaletSection.id,
      name: chaletSection.name,
      numberOfRooms: chaletSection.numberOfRooms,
      pricePerNight: chaletSection.pricePerNight,
      numberOfStars: chaletSection.numberOfStars,
      description: chaletSection.description,
      images: chaletSection.images.map((image) => image.attachment_path),
      videos: chaletSection.video.map((video) => video.url),
      bookingConditions: chaletSection.bookingConditions,
      cancellingConditions: chaletSection.cancellingConditions,
      coordinates: chaletSection,

      // TODO
      features: [],
      reservedDates: [],
      reviews: [],
    };
    return chaletSectionEntity;
  });
};
