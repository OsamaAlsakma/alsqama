import { ResservedDateType } from "~/bootstrap/helper/global-types";
import { Appartment } from "~/core/Apartments/view/cards-section/wrapper/appartments-cards-wrapper";

export type AppartmentsResponse = {
  id: string;
  images: { attachment_path: string }[];
  name: string;
  price: number;
  location?: string;
  capacity?: string; // number of rooms

  // TODO he needs to add
  reservations: ResservedDateType[];
};

export const getAppartmentsDTO = (
  response: AppartmentsResponse[]
): Appartment[] => {
  return response.map((appartmentResponse: AppartmentsResponse) => {
    const appartmentEntity: Appartment = {
      id: appartmentResponse.id,
      name: appartmentResponse.name,
      pricePerNight: appartmentResponse.price,
      images: appartmentResponse.images.map((image) => image.attachment_path),
      location: appartmentResponse.location,
      numberOfRooms: appartmentResponse.capacity,

      // TODO modify it when it will be added
      reservedDates: [],
    };
    return appartmentEntity;
  });
};
