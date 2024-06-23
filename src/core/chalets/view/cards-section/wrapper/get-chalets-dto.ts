import dayjs from "dayjs";
import { Chalet } from "~/core/chalets/view/cards-section/wrapper/chalets-cards-wrapper";

export type ChaletsResponse = {
  id: string;
  name: string;
  location: string;
  numberOfStars: number;
  phone: string;
  images: { attachment_path: string }[];
  price: number;
  // TODO he needs to add the numbe of rooms
  // TODO he needs to send reservedDates so we can filter them
};
export const getChaletsDTO = (response: ChaletsResponse[]): Chalet[] => {
  return response.map((chalet: ChaletsResponse) => {
    const chaletEntity: Chalet = {
      id: chalet.id,
      images: chalet.images.map((image) => image.attachment_path),
      name: chalet.name,
      numberOfStars: chalet.numberOfStars,
      location: chalet.location,
      price: chalet.price,
      nearestTimeAvailable: dayjs(new Date()).toString(),
      // TODO fix it after the back end will fix it
      numberOfRooms: chalet.numberOfStars,
    };
    return chaletEntity;
  });
};
