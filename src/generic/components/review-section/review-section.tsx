import { Rating } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { mainFontFamily } from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import AlertMessage from "~/generic/components/alert-message/alert-message";
import {
  ReviewSectionSubmit,
  ReviewSectionTextField,
} from "~/generic/components/review-section/style";

const ReviewSection: React.FC = () => {
  const [rating, setRating] = useState<number | null>(0);
  const [review, setReview] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleRatingChange = (
    _event: React.ChangeEvent<object>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    setRating(0);
    setReview("");
    setOpen(true);
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
          اكتب مراجعة
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
            placeholder="مراجعتك"
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
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            إرسال
          </ReviewSectionSubmit>
        </Box>
      </Box>
      <AlertMessage
        durationInMs={4500}
        message={"تم إرسال تقييمك بنجاح"}
        open={open}
        setOpen={setOpen}
      />
    </HandlingSectionPaddingWrapper>
  );
};

export default ReviewSection;
