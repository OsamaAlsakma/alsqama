import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import ImageViewer from "react-simple-image-viewer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { imagesUrl } from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import {
  ChaletsDetailsPhotoAllImagesWrapper,
  ChaletsDetailsPhotoMainImage,
  ChaletsDetailsPhotoSmallImage,
  ChaletsDetailsPhotoSmallImagesWrapper,
  DetailsPhotoViewerFooter,
  DetailsPhotoViewerFooterButton,
  DetailsPhotoViewerFooterButtonVideo,
  DetailsPhotoViewerSwiper,
} from "~/core/chalets/view/details-section/photos-viewer/style";
import {
  CustomNextButton,
  CustomPrevButton,
  StyledSwiperSlide,
} from "~/core/main/view/slides/style";

interface IChaletsDetailsPhotoViewerProps {
  images: string[];
  video?: string;
}

/* ----------------------------- Implementation ----------------------------- */
const ChaletsDetailsPhotoViewer = (props: IChaletsDetailsPhotoViewerProps) => {
  const { images, video } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const { t } = useTranslation();
  return (
    <HandlingSectionPaddingWrapper>
      {/* First position */}
      <ChaletsDetailsPhotoAllImagesWrapper className="all-images">
        <ChaletsDetailsPhotoMainImage
          className="big-image"
          image={`${imagesUrl}/${images[0]}`}
          onClick={() => openImageViewer(0)}
        />
        <ChaletsDetailsPhotoSmallImagesWrapper className="small-images">
          {images.slice(1, 5).map((image, index) => (
            <ChaletsDetailsPhotoSmallImage
              image={`${imagesUrl}/${image}`}
              key={index}
              onClick={() => openImageViewer(index + 1)}
            />
          ))}
        </ChaletsDetailsPhotoSmallImagesWrapper>
      </ChaletsDetailsPhotoAllImagesWrapper>

      {/* second position */}
      <DetailsPhotoViewerSwiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <StyledSwiperSlide
              key={index}
              style={{ backgroundImage: `url(${imagesUrl}/${image})` }}
              onClick={() => openImageViewer(index)}
            />
          );
        })}
        <CustomPrevButton className="swiper-button-prev" />
        <CustomNextButton className="swiper-button-next" />
      </DetailsPhotoViewerSwiper>
      {/* open button */}
      <DetailsPhotoViewerFooter>
        {images.length > 0 && (
          <DetailsPhotoViewerFooterButton
            startIcon={<InsertPhotoIcon />}
            onClick={() => setIsViewerOpen(true)}
          >
            {t(langKey.detailsPage.seeMorePhoto)}
          </DetailsPhotoViewerFooterButton>
        )}
        {video && (
          <DetailsPhotoViewerFooterButtonVideo
            href={`${video}`}
            target="_blank"
          >
            <SlowMotionVideoIcon />
            {t(langKey.detailsPage.watchVideo)}
          </DetailsPhotoViewerFooterButtonVideo>
        )}
      </DetailsPhotoViewerFooter>
      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </HandlingSectionPaddingWrapper>
  );
};

export default ChaletsDetailsPhotoViewer;
