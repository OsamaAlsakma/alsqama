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
  capacity: string; //number of rooms

  // TODO he needs to send reservedDates so we can filter them
};
export const getChaletsDTO = (response: ChaletsResponse[]): Chalet[] => {
  const today = dayjs();

  const day = today.date();
  const month = today.month() + 1;
  const year = today.year();

  return response.map((chalet: ChaletsResponse) => {
    const chaletEntity: Chalet = {
      id: chalet.id,
      images: chalet.images.map((image) => image.attachment_path),
      name: chalet.name,
      numberOfStars: chalet.numberOfStars,
      location: chalet.location,
      price: chalet.price,
      nearestTimeAvailable: `${day}.${month}.${year}`,
      numberOfRooms: chalet.capacity,

      // TODO back needs to add it
      reservedDates: [],
    };
    return chaletEntity;
  });
};
