import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import {
  StyledSwiperSlide,
  CustomPrevButton,
  CustomNextButton,
} from "~/core/main/view/slides/style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import {
  ChaletsDetailsPhotoAllImagesWrapper,
  ChaletsDetailsPhotoMainImage,
  ChaletsDetailsPhotoSmallImagesWrapper,
  ChaletsDetailsPhotoSmallImage,
  DetailsPhotoViewerSwiper,
  DetailsPhotoViewerFooter,
} from "~/core/chalets/view/details-section/photos-viewer/style";

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

  return (
    <HandlingSectionPaddingWrapper>
      {/* First position */}
      <ChaletsDetailsPhotoAllImagesWrapper className="all-images">
        <ChaletsDetailsPhotoMainImage
          className="big-image"
          image={images[0]}
          onClick={() => openImageViewer(0)}
        />
        <ChaletsDetailsPhotoSmallImagesWrapper className="small-images">
          {images.slice(1, 5).map((image, index) => (
            <ChaletsDetailsPhotoSmallImage
              image={image}
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
              style={{ backgroundImage: `url(${image})` }}
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
          <Button onClick={() => setIsViewerOpen(true)}>
            عرض المزيد من الصور
          </Button>
        )}
        {video && (
          <Button href={`${video}`} target="_blank">
            مشاهدة فيديو
          </Button>
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
