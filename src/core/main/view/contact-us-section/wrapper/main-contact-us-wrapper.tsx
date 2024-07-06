import axios from "axios";
import { useEffect, useState } from "react";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import MainContactUsForm from "~/core/main/view/contact-us-section/contact-us-form/main-contact-us-form";
import MainContactUsPictures from "~/core/main/view/contact-us-section/pictures/main-contact-us-pictures";
import MainContactUsWebisteDescription from "~/core/main/view/contact-us-section/website-description/main-contact-us-webiste-description";
import {
  ContactUsPicturesAndDescriptionResponse,
  getMainContactUsDTO,
} from "~/core/main/view/contact-us-section/wrapper/main-contact-us-dto";
import { StyledHandlingSectionPaddingWrapper } from "~/core/main/view/contact-us-section/wrapper/style";

export type ContactUsPicturesAndDescriptionType = {
  title: string;
  description: string;
  images: string[];
};

const MainContactUsWrapper = () => {
  // fetch
  const [contactUsPicturesAndDescription, setContactUsPicturesAndDescription] =
    useState<ContactUsPicturesAndDescriptionType>();

  const fetchContactUsPicturesAndDescription = async () => {
    const response = await axios.get(
      `${mainPageEndpointsUrl.contactUsPicturesAndDescription}`
    );
    if (response.status === 200) {
      const responseData: ContactUsPicturesAndDescriptionResponse =
        response.data;
      const contactUsDto = getMainContactUsDTO(responseData);
      setContactUsPicturesAndDescription(contactUsDto);
    }
  };

  useEffect(() => {
    fetchContactUsPicturesAndDescription();
  }, []);

  return (
    <StyledHandlingSectionPaddingWrapper>
      <MainContactUsPictures
        images={contactUsPicturesAndDescription?.images || []}
      />
      <MainContactUsWebisteDescription
        title={contactUsPicturesAndDescription?.title || ""}
        description={contactUsPicturesAndDescription?.description || ""}
      />
      <MainContactUsForm />
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default MainContactUsWrapper;
