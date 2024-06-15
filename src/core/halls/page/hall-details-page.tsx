import axios from "axios";
import { useEffect, useState } from "react";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import { DetailsPageEdgeCaseMessage } from "~/core/chalets/page/style";
import ChaletsDetailsDescriptionWrapper from "~/core/chalets/view/details-section/description-section/wrapper/chalets-details-description-wrapper";
import ChaletsDetailsInfoTabsAndBookingCardWrapper from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/wrapper/chalets-details-info-tabs-and-booking-card-wrapper";
import ChaletsDetailsPhotoViewer from "~/core/chalets/view/details-section/photos-viewer/chalets-details-photo-viewer";
import ChaletsDetailsTitleWrapper from "~/core/chalets/view/details-section/title-section/wrapper/chalets-details-title-wrapper";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import DetailsPageFastDescriptionAndShare from "~/generic/components/fast-description-and-share/details-page-fast-description-and-share";
import PlaceIcon from "@mui/icons-material/Place";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StarIcon from "@mui/icons-material/Star";

export type HallDetailType = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  coordinates: { latitude: number; longitude: number };
  images: string[];
  videos: string[];
  bookingConditions: string;
  cancellingConditions: string;
  phoneNumber: number;
  features: string[];
  reviews: ReviewType[];
  availableTimes: string[];
};
const HallDetailsPage = () => {
  const [hallDetails, setHallDetails] = useState<HallDetailType>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHallDetailsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.hallDetails}`);
      if (response.status === 200) {
        const hallDetails: HallDetailType = response.data;
        setHallDetails(hallDetails);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHallDetailsData();
  }, []);

  if (isError)
    return (
      <DetailsPageEdgeCaseMessage>
        يرجى المحاولة لاحقا
      </DetailsPageEdgeCaseMessage>
    );
  if (isLoading) return <CircularLoader />;
  return (
    <div>
      <ChaletsDetailsTitleWrapper title={hallDetails?.name || ""} />
      <DetailsPageFastDescriptionAndShare
        items={[
          {
            icon: PlaceIcon,
            title: `يمن - صنعاء - شارع الجمهورية`,
          },
          {
            icon: StarIcon,
            title: `8 نجمة`,
          },
          {
            icon: SpaceDashboardIcon,
            title: `تتسع لخمسين شخص`,
          },
        ]}
      />
      <ChaletsDetailsPhotoViewer
        images={hallDetails?.images || []}
        video={hallDetails?.videos[0] || ""}
      />
      <ChaletsDetailsDescriptionWrapper
        name={hallDetails?.name || ""}
        description={hallDetails?.description || ""}
      />
      <ChaletsDetailsInfoTabsAndBookingCardWrapper
        infoTabs={{
          features: hallDetails?.features || [],
          bookingConditions: hallDetails?.bookingConditions || "",
          cancellingConditions: hallDetails?.cancellingConditions || "",
          coordinates: hallDetails?.coordinates || {
            latitude: 0,
            longitude: 0,
          },
          reviews: hallDetails?.reviews || [],
        }}
        pricePerNight={hallDetails?.pricePerNight || 0}
        name={hallDetails?.name || ""}
      />
    </div>
  );
};

export default HallDetailsPage;
