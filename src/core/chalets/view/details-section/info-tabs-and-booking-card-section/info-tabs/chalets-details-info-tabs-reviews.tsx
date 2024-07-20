import Rating from "@mui/material/Rating/Rating";
import { useTranslation } from "react-i18next";
import langKey from "~/bootstrap/i18n/langKey";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import {
  BookingCancelingConditionsEdgeCase,
  ChaletsDetailsInfoTabsReviewReviewerData,
  ChaletsDetailsInfoTabsReviewReviewerIcon,
  ChaletsDetailsInfoTabsReviewReviewerName,
  ChaletsDetailsInfoTabsReviewReviewerNameAndDate,
  ChaletsDetailsInfoTabsReviewText,
  ChaletsDetailsInfoTabsReviewWrapper,
  ChaletsDetailsInfoTabsReviewsWrapper,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/style";

interface IChaletsDetailsInfoTabsReviewsProps {
  reviews: ReviewType[];
}

const ChaletsDetailsInfoTabsReviews = (
  props: IChaletsDetailsInfoTabsReviewsProps
) => {
  const { reviews } = props;

  const { t } = useTranslation();
  return (
    <ChaletsDetailsInfoTabsReviewsWrapper>
      {reviews.length !== 0 ? (
        reviews.map((review: ReviewType, index: number) => (
          <ChaletsDetailsInfoTabsReviewWrapper key={index}>
            {/* icon and meta data */}
            <ChaletsDetailsInfoTabsReviewReviewerData>
              <ChaletsDetailsInfoTabsReviewReviewerIcon />
              <ChaletsDetailsInfoTabsReviewReviewerNameAndDate>
                <ChaletsDetailsInfoTabsReviewReviewerName>
                  {review.reviewerName}
                </ChaletsDetailsInfoTabsReviewReviewerName>
                <Rating
                  readOnly
                  name="user-rating"
                  value={review.givenStars}
                  size="small"
                />
              </ChaletsDetailsInfoTabsReviewReviewerNameAndDate>
            </ChaletsDetailsInfoTabsReviewReviewerData>
            {/* body */}
            <ChaletsDetailsInfoTabsReviewText>
              {review.reviewBody}
            </ChaletsDetailsInfoTabsReviewText>
          </ChaletsDetailsInfoTabsReviewWrapper>
        ))
      ) : (
        <BookingCancelingConditionsEdgeCase>
          {t(langKey.detailsPage.noReviewsToShow)}
        </BookingCancelingConditionsEdgeCase>
      )}
    </ChaletsDetailsInfoTabsReviewsWrapper>
  );
};

export default ChaletsDetailsInfoTabsReviews;
