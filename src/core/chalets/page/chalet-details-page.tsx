/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { DetailsPageEdgeCaseMessage } from "~/core/chalets/page/style";
import ChaletsDetailsDescriptionWrapper from "~/core/chalets/view/details-section/description-section/wrapper/chalets-details-description-wrapper";
import ChaletsDetailsInfoTabsAndBookingCardWrapper from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/wrapper/chalets-details-info-tabs-and-booking-card-wrapper";
import ChaletsDetailsPhotoViewer from "~/core/chalets/view/details-section/photos-viewer/chalets-details-photo-viewer";
import ChaletsDetailsTitleWrapper from "~/core/chalets/view/details-section/title-section/wrapper/chalets-details-title-wrapper";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export type ReviewType = {
  reviewerName: string;
  givenStars: number;
  reviewBody: string;
};

export type ChaletSectionType = {
  id: string;
  name: string;
  numberOfRooms: number;
  pricePerNight: number;
  nearestAvailableTime: string;
  numberOfStars: number;
  description: string;
  images: string[];
  videos: string[];
  availableTimes: string[];
  features: string[];
  bookingConditions: string;
  cancellingConditions: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  reviews: ReviewType[];
};

const ChaletDetailsPage = () => {
  const [chaletSections, setChaletSections] = useState<ChaletSectionType[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchChaletsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.chaletDetails}`);
      if (response.status === 200) {
        const chaletSections: ChaletSectionType[] = response.data;
        setChaletSections(chaletSections);
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
      {chaletSections.map((chaletSection: ChaletSectionType, index: number) => {
        return (
          <div key={index}>
            <ChaletsDetailsTitleWrapper title={chaletSection?.name || ""} />
            <ChaletsDetailsPhotoViewer
              images={chaletSection?.images || []}
              video={chaletSection?.videos[0] || ""}
            />
            <ChaletsDetailsDescriptionWrapper
              name={chaletSection?.name || ""}
              description={chaletSection?.description || ""}
            />
            <ChaletsDetailsInfoTabsAndBookingCardWrapper
              infoTabs={{
                features: chaletSection?.features || [],
                bookingConditions: chaletSection?.bookingConditions || "",
                cancellingConditions: chaletSection?.cancellingConditions || "",
                coordinates: chaletSection?.coordinates || {
                  latitude: 0,
                  longitude: 0,
                },
                reviews: chaletSection?.reviews || [],
              }}
              pricePerNight={chaletSection?.pricePerNight}
              name={chaletSection?.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChaletDetailsPage;
