import { ReviewResponse } from "~/bootstrap/helper/global-types";
import { ChaletSectionType } from "~/core/chalets/page/chalet-details-page";

export type ChaletSectionsResponse = {
  id: string;
  name: string;
  pricePerNight: number;
  description: string;
  latitude: string;
  longitude: string;
  bookingConditions: string;
  cancellingConditions: string;
  images: { attachment_path: string }[];
  video: { url: string }[];
  numberOfStars?: string;
  numberOfRooms?: string;
  features: { name: string }[];
  location?: string;
  reviews: ReviewResponse[];
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
      coordinates: {
        latitude: chaletSection.latitude,
        longitude: chaletSection.longitude,
      },
      features: chaletSection.features.map((feature) => feature.name),

      // fast desctription
      numberOfRooms: chaletSection.numberOfRooms,
      numberOfStars: chaletSection.numberOfStars,
      location: chaletSection.location,

      reviews: chaletSection.reviews.map((review) => ({
        givenStars: review.rating,
        reviewBody: review.comment,
        reviewerName: review.user?.name || "مقيم",
      })),
      // TODO
      reservedDates: [],
    };
    return chaletSectionEntity;
  });
};
