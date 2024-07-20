import { Rating } from "@mui/lab";
import { AlertColor, Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router";
import di from "~/bootstrap/di";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { mainFontFamily } from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import Store from "~/bootstrap/helper/store/store-type";
import useStoreSelector from "~/bootstrap/helper/vm/use-store-selector";
import langKey from "~/bootstrap/i18n/langKey";
import { DetailsBookingCardConfirmConditionMessage } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";
import AlertMessage from "~/generic/components/alert-message/alert-message";
import {
  ReviewSectionSubmit,
  ReviewSectionTextField,
} from "~/generic/components/review-section/style";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import { PossibleSelectedTabs } from "~/generic/context/selected-tab-ctx";
import NUserStore from "~/support/login-signup-forms/store/i-user-store";
import { userStoreKey } from "~/support/login-signup-forms/store/user-store";
import { SwitchLoginSignupButton } from "~/support/login-signup-forms/style";

interface IReviewSectionProps {
  chaletSectionId?: string
}

const ReviewSection = (props:IReviewSectionProps) => {
  const {chaletSectionId} = props
  const [rating, setRating] = useState<number | null>(0);
  const [review, setReview] = useState<string>("");
  const [open, setOpen] = useState(false);

  // validation
  const { setIsOpen } = di.resolve(OpenLoginSignUpModalCTX).useContext();
  const userStore = di.resolve<Store<NUserStore.IUsernameStore>>(userStoreKey);
  const { token, userId } = useStoreSelector(userStore, (store) => store.user);

  // changing
  const handleRatingChange = (
    _event: React.ChangeEvent<object>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  // submit
  const { t } = useTranslation();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [messageContent, setMessageContent] = useState<string>(
    t(langKey.detailsPage.successfulPaymentMessage)
  );
  const [messageType, setMessageType] = useState<AlertColor>("success");

  const handleSubmit = async () => {
    const entityType =
      pathname.includes(PossibleSelectedTabs.APPARTMENT) ||
      pathname.includes(PossibleSelectedTabs.HALL)
        ? "accommodation"
        : pathname.includes(PossibleSelectedTabs.HOTEL)
        ? "room"
        : "chalet_section";

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${endpointsUrl.sendReview}`,
        {
          user_id: userId,
          entity_type: entityType,
          entity_id: chaletSectionId|| id,
          rating: rating,
          comment: review,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setMessageContent(t(langKey.detailsPage.reviewSent));
        setMessageType("success");
        setRating(0);
        setReview("");
      }
    } catch (error) {
      setMessageType("error");
      setMessageContent(t(langKey.detailsPage.errorPaymentMessage));
    }
    setOpen(true);
    setIsLoading(false);
  };

  return (
    <HandlingSectionPaddingWrapper>
      <Box
        sx={{
          width: "100%",

          mx: "auto",
          mt: 5,
          direction: "rtl",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{ fontFamily: `${mainFontFamily}` }}
        >
          {t(langKey.detailsPage.writeReview)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Rating
            name="user-rating"
            value={rating}
            onChange={handleRatingChange}
            size="large"
            style={{ display: "flex", flexDirection: "row-reverse" }}
          />
          <ReviewSectionTextField
            placeholder={t(langKey.detailsPage.yourReview)}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={review}
            onChange={handleReviewChange}
            sx={{ mt: 2 }}
          />
          <ReviewSectionSubmit
            variant="contained"
            loading={isLoading}
            sx={{ mt: 2 }}
            onClick={handleSubmit}
            disabled={!rating || !review || !token}
          >
            {t(langKey.detailsPage.send)}
          </ReviewSectionSubmit>
          {/* validation */}
          {!review || !rating ? (
            <DetailsBookingCardConfirmConditionMessage>
              {t(langKey.detailsPage.writeReviewAndSetStars)}
            </DetailsBookingCardConfirmConditionMessage>
          ) : (
            !token && (
              <DetailsBookingCardConfirmConditionMessage>
                <SwitchLoginSignupButton
                  disableRipple
                  onClick={() => setIsOpen(true)}
                >
                  {t(langKey.detailsPage.loginOrSignUpToContinue)}
                </SwitchLoginSignupButton>
              </DetailsBookingCardConfirmConditionMessage>
            )
          )}
          {/* end validation */}
        </Box>
      </Box>
      <AlertMessage
        durationInMs={4500}
        message={messageContent}
        open={open}
        setOpen={setOpen}
        type={messageType}
      />
    </HandlingSectionPaddingWrapper>
  );
};

export default ReviewSection;
