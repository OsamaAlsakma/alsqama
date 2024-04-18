import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { styled } from "styled-components";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";

const images = [
  "https://c4.wallpaperflare.com/wallpaper/915/596/21/dicksam-plateau-socotra-island-yemen-dragon-trees-desert-landscape-desktop-wallpaper-hd-1920%C3%971080-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/429/988/868/mountains-stones-village-yemen-wallpaper-preview.jpg",
  "https://img.freepik.com/free-photo/portrait-of-young-woman-with-natural-make-up_23-2149084942.jpg",
  "https://c4.wallpaperflare.com/wallpaper/237/180/1018/yemen-city-lights-sanaa-cityscape-wallpaper-preview.jpg",
  "https://i.etsystatic.com/28024432/r/il/0e5c32/2896175538/il_fullxfull.2896175538_pnjn.jpg",
  "https://c4.wallpaperflare.com/wallpaper/783/466/557/nature-trees-rock-dragon-blood-tree-wallpaper-preview.jpg",
];

const ChaletsDetailsPhotoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: calc(25% - 20px);
  height: 400px;
  margin: 10px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: calc(33.33% - 20px);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const ChaletsDetailsPhotoViewer = () => {
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
      <ChaletsDetailsPhotoWrapper>
        {images.slice(0, 4).map((src, index) => (
          <StyledImage
            src={src}
            onClick={() => openImageViewer(index)}
            key={index}
            alt={`${src}`}
          />
        ))}
      </ChaletsDetailsPhotoWrapper>
      <Button onClick={() => setIsViewerOpen(true)}>عرض المزيد من الصور</Button>
      {isViewerOpen && (
        <ImageViewer
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
