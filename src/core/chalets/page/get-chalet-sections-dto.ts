import { ChaletSectionType } from "~/core/chalets/page/chalet-details-page";

export type ChaletSectionsResponse = {
  id: string;
  name: string;
  pricePerNight: number;
  description: string;
  latitude: number;
  longitude: number;
  bookingConditions: string;
  cancellingConditions: string;
  images: { attachment_path: string }[];
  video: { url: string }[];
  numberOfStars?: string;
  numberOfRooms?: string;
  features: { name: string }[];
  location?: string;
};
export const getChaletSectionsDTO = (
  response: ChaletSectionsResponse[]
): ChaletSectionType[] => {
  return response.map((chaletSection: ChaletSectionsResponse) => {
    const chaletSectionEntity: ChaletSectionType = {
      id: chaletSection.id,
      name: chaletSection.name,
      pricePerNight: chaletSection.pricePerNight,
      description: chaletSection.description,
      images: chaletSection.images.map((image) => image.attachment_path),
      videos: chaletSection.video.map((video) => video.url),
      bookingConditions: chaletSection.bookingConditions,
      cancellingConditions: chaletSection.cancellingConditions,
      coordinates: chaletSection,
      features: chaletSection.features.map((feature) => feature.name),

      // fast desctription
      numberOfRooms: chaletSection.numberOfRooms,
      numberOfStars: chaletSection.numberOfStars,
      location: chaletSection.location,

      reviews: [],
      // TODO
      reservedDates: [],
    };
    return chaletSectionEntity;
  });
};
