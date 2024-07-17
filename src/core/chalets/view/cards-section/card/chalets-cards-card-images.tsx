import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { imagesUrl } from "~/bootstrap/helper/global-helper";
import langKey from "~/bootstrap/i18n/langKey";

import {
  CardMessageWithoutImages,
  ChaletsCardsCardImagesNextButton,
  ChaletsCardsCardImagesPrevButton,
  ChaletsCardsCardImagesSwiper,
  ChaletsCardsCardImagesSwiperSlide,
} from "~/core/chalets/view/cards-section/card/style";

type IChaletsCardsCardImagesProps = {
  images: string[];
};

const ChaletsCardsCardImages = (props: IChaletsCardsCardImagesProps) => {
  const { images } = props;
  const { t } = useTranslation();
  if (images.length === 0)
    return (
      <CardMessageWithoutImages>
        {t(langKey.global.noPictures)}
      </CardMessageWithoutImages>
    );
  return (
    <ChaletsCardsCardImagesSwiper
      loop={true}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {images.map((image: string, index) => {
        return (
          <ChaletsCardsCardImagesSwiperSlide
            key={index}
            style={{ backgroundImage: `url(${imagesUrl}/${image})` }}
          />
        );
      })}
      <ChaletsCardsCardImagesPrevButton className="swiper-button-prev" />
      <ChaletsCardsCardImagesNextButton className="swiper-button-next" />
    </ChaletsCardsCardImagesSwiper>
  );
};

export default ChaletsCardsCardImages;
