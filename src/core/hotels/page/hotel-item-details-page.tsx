/* eslint-disable react-hooks/exhaustive-deps */
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
import {
  HotelItemDetailsResponse,
  getHotelItemDetailsDTO,
} from "~/core/hotels/page/get-hotel-item-details-dto";
import { useParams } from "react-router";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { ResservedDateType } from "~/bootstrap/helper/global-types";
import ReviewSection from "~/generic/components/review-section/review-section";

export type HotelItemDetailType = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  coordinates: { latitude: string; longitude: string };
  images: string[];
  videos: string[];
  bookingConditions: string;
  cancellingConditions: string;
  features: string[];
  reviews: ReviewType[];
  hotelPhoneNumber?: number;
  roomsNumber?: string;
  bedsNumber?: string;
  reservedDates: ResservedDateType[];
  location?: string;
};
const HotelItemDetailsPage = () => {
  const [hotelItemDetail, setHotelItemDetail] = useState<HotelItemDetailType>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id: hotelItemId } = useParams();

  const fetchChaletsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${endpointsUrl.hotelItemDetails}/${hotelItemId}`
      );
      if (response.status === 200) {
        const hotelItemDetail: HotelItemDetailsResponse = response.data;
        const dtoResponse = getHotelItemDetailsDTO(hotelItemDetail);
        setHotelItemDetail(dtoResponse);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchChaletsData();
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
      <ChaletsDetailsTitleWrapper title={hotelItemDetail?.name || ""} />
      <DetailsPageFastDescriptionAndShare
        items={[
          {
            icon: PlaceIcon,
            title: hotelItemDetail?.location,
          },
          {
            icon: OtherHousesIcon,
            title: hotelItemDetail?.roomsNumber,
          },
          {
            icon: SpaceDashboardIcon,
            title: hotelItemDetail?.bedsNumber,
          },
        ]}
      />
      <ChaletsDetailsPhotoViewer
        images={hotelItemDetail?.images || []}
        video={hotelItemDetail?.videos[0] || ""}
      />
      <ChaletsDetailsDescriptionWrapper
        name={hotelItemDetail?.name || ""}
        description={hotelItemDetail?.description || ""}
      />
      <ChaletsDetailsInfoTabsAndBookingCardWrapper
        infoTabs={{
          features: hotelItemDetail?.features || [],
          bookingConditions: hotelItemDetail?.bookingConditions || "",
          cancellingConditions: hotelItemDetail?.cancellingConditions || "",
          coordinates: hotelItemDetail?.coordinates || {
            latitude: "",
            longitude: "",
          },
          reviews: hotelItemDetail?.reviews || [],
        }}
        pricePerNight={hotelItemDetail?.pricePerNight || 0}
        name={hotelItemDetail?.name || ""}
        reservedDates={hotelItemDetail?.reservedDates || []}
      />
      <ReviewSection />
    </div>
  );
};

export default HotelItemDetailsPage;
