/* eslint-disable react-hooks/exhaustive-deps */
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { ResservedDateType } from "~/bootstrap/helper/global-types";
import {
  AppartmentDetailsResponse,
  getAppartmentDetailsDTO,
} from "~/core/Apartments/page/get-appartment-details-dto";

import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import { DetailsPageEdgeCaseMessage } from "~/core/chalets/page/style";
import ChaletsDetailsDescriptionWrapper from "~/core/chalets/view/details-section/description-section/wrapper/chalets-details-description-wrapper";
import ChaletsDetailsInfoTabsAndBookingCardWrapper from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/wrapper/chalets-details-info-tabs-and-booking-card-wrapper";
import ChaletsDetailsPhotoViewer from "~/core/chalets/view/details-section/photos-viewer/chalets-details-photo-viewer";
import ChaletsDetailsTitleWrapper from "~/core/chalets/view/details-section/title-section/wrapper/chalets-details-title-wrapper";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import DetailsPageFastDescriptionAndShare from "~/generic/components/fast-description-and-share/details-page-fast-description-and-share";

export type AppartmentDetailType = {
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
  availableTimes: string[];
  location?: string;
  numberOfRooms?: string;
  reservedDates: ResservedDateType[];
};
const AppartmentDetailsPage = () => {
  const [appartmentDetails, setAppartmentDetails] =
    useState<AppartmentDetailType>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const fetchAppartmentDetailsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${endpointsUrl.appartmentDetails}/${id}`
      );
      if (response.status === 200) {
        const appartmentDetails: AppartmentDetailsResponse = response.data;
        const appartmentDetailsDto: AppartmentDetailType =
          getAppartmentDetailsDTO(appartmentDetails);
        setAppartmentDetails(appartmentDetailsDto);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAppartmentDetailsData();
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
      <ChaletsDetailsTitleWrapper title={appartmentDetails?.name || ""} />
      <DetailsPageFastDescriptionAndShare
        items={[
          {
            icon: PlaceIcon,
            title: appartmentDetails?.location,
          },
          {
            icon: OtherHousesIcon,
            title: appartmentDetails?.numberOfRooms,
          },
          {
            icon: MonetizationOnIcon,
            title: appartmentDetails?.pricePerNight,
          },
        ]}
      />
      <ChaletsDetailsPhotoViewer
        images={appartmentDetails?.images || []}
        video={appartmentDetails?.videos[0] || ""}
      />
      <ChaletsDetailsDescriptionWrapper
        name={appartmentDetails?.name || ""}
        description={appartmentDetails?.description || ""}
      />
      <ChaletsDetailsInfoTabsAndBookingCardWrapper
        infoTabs={{
          features: appartmentDetails?.features || [],
          bookingConditions: appartmentDetails?.bookingConditions || "",
          cancellingConditions: appartmentDetails?.cancellingConditions || "",
          coordinates: appartmentDetails?.coordinates || {
            latitude: 0,
            longitude: 0,
          },
          reviews: appartmentDetails?.reviews || [],
        }}
        pricePerNight={appartmentDetails?.pricePerNight || 0}
        name={appartmentDetails?.name || ""}
        reservedDates={appartmentDetails?.reservedDates || []}
      />
    </div>
  );
};

export default AppartmentDetailsPage;
