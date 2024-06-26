/* eslint-disable react-hooks/exhaustive-deps */
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { ResservedDateType } from "~/bootstrap/helper/global-types";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import { DetailsPageEdgeCaseMessage } from "~/core/chalets/page/style";
import ChaletsDetailsDescriptionWrapper from "~/core/chalets/view/details-section/description-section/wrapper/chalets-details-description-wrapper";
import ChaletsDetailsInfoTabsAndBookingCardWrapper from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/wrapper/chalets-details-info-tabs-and-booking-card-wrapper";
import ChaletsDetailsPhotoViewer from "~/core/chalets/view/details-section/photos-viewer/chalets-details-photo-viewer";
import ChaletsDetailsTitleWrapper from "~/core/chalets/view/details-section/title-section/wrapper/chalets-details-title-wrapper";
import {
  HallDetailsResponse,
  getHallDetailsDTO,
} from "~/core/halls/page/get-hall-details-dto";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import DetailsPageFastDescriptionAndShare from "~/generic/components/fast-description-and-share/details-page-fast-description-and-share";

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
  features: string[];
  reviews: ReviewType[];
  location?: string;
  capacity?: string;

  reservedDates: ResservedDateType[];
};
const HallDetailsPage = () => {
  const [hallDetails, setHallDetails] = useState<HallDetailType>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id: hallId } = useParams();
  const fetchHallDetailsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.hallDetails}/${hallId}`);
      if (response.status === 200) {
        const hallDetails: HallDetailsResponse = response.data;
        const hallDetailsDto: HallDetailType = getHallDetailsDTO(hallDetails);
        setHallDetails(hallDetailsDto);
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
            title: hallDetails?.location,
          },
          {
            icon: GroupsIcon,
            title: hallDetails?.capacity,
          },
          {
            icon: MonetizationOnIcon,
            title: hallDetails?.pricePerNight,
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
        reservedDates={hallDetails ? hallDetails.reservedDates : []}
      />
    </div>
  );
};

export default HallDetailsPage;
