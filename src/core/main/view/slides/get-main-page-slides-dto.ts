import { MainPageSlide } from "~/core/main/view/slides/main-slides";

export type MainPageSlideResponse = {
  id: string;
  image: string;
  title: string;
  description: string;
};
export const getMainPageSlidesDTO = (
  response: MainPageSlideResponse[]
): MainPageSlide[] => {
  return response.map((slide: MainPageSlideResponse) => {
    const mainPageSlide: MainPageSlide = {
      id: slide.id,
      title: slide.title,
      description: slide.description,
      image: slide.image,
    };
    return mainPageSlide;
  });
};
