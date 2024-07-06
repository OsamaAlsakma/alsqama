import { ContactUsPicturesAndDescriptionType } from "~/core/main/view/contact-us-section/wrapper/main-contact-us-wrapper";

export type ContactUsPicturesAndDescriptionResponse = {
  title: string;
  description: string;
  images: { attachment_path: string }[];
};

export const getMainContactUsDTO = (
  response: ContactUsPicturesAndDescriptionResponse
): ContactUsPicturesAndDescriptionType => {
  const contactUsResponse: ContactUsPicturesAndDescriptionType = {
    title: response.title,
    description: response.description,
    images: response.images.map((image) => image.attachment_path),
  };
  return contactUsResponse;
};
