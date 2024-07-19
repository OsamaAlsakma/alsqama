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
            <ChaletsDetailsInfoTabsReviewReviewerData>
              <ChaletsDetailsInfoTabsReviewReviewerIcon />
              <ChaletsDetailsInfoTabsReviewReviewerNameAndDate>
                <ChaletsDetailsInfoTabsReviewReviewerName>
                  {review.reviewerName}
                </ChaletsDetailsInfoTabsReviewReviewerName>
                <span>{review.givenStars}</span>
              </ChaletsDetailsInfoTabsReviewReviewerNameAndDate>
            </ChaletsDetailsInfoTabsReviewReviewerData>
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
