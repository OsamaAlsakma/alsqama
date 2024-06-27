import { Hall } from "~/core/halls/view/cards-section/wrapper/halls-cards-wrapper";

export type HallsResponse = {
  id: string;
  images: { attachment_path: string }[];
  name: string;
  price: number;
  location?: string;
  capacity?: string;

  // TODO he needs to add
  // reservations:ResservedDateType[]
};
export const getHallsDTO = (response: HallsResponse[]): Hall[] => {
  return response.map((hallResponse: HallsResponse) => {
    const hallEntity: Hall = {
      id: hallResponse.id,
      name: hallResponse.name,
      pricePerNight: hallResponse.price,
      images: hallResponse.images.map((image) => image.attachment_path),
      location: hallResponse.location,
      peopleCapacity: hallResponse.capacity,

      // TODO modify it when it will be added
      reservedDates: [],
    };
    return hallEntity;
  });
};
