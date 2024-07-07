import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import { SocialMediaIconsType } from "~/bootstrap/helper/global-types";
import {
  SocialMediaIconsResponse,
  getSocialMediaIconsDTO,
} from "~/core/main/view/footer-section/footer-icons/get-social-media-icons-dto";
import { MainFooterContactIcon } from "~/core/main/view/footer-section/wrapper/style";

const HeaderDrawerContactUsWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 0px;
`;

const HeaderDrawerContactUsImg = styled.img`
  width: 36px;
  height: 36px;
`;

const ServicesBurgerDrawerContactUsIcons = () => {
  const [iconsData, setIconsData] = useState<SocialMediaIconsType>();
  const fetchIconsData = async () => {
    const response = await axios.get(
      `${mainPageEndpointsUrl.socialMediaIcons}`
    );
    const icons: SocialMediaIconsResponse[] = response.data;
    const iconsDto = getSocialMediaIconsDTO(icons);
    setIconsData(iconsDto);
  };
  useEffect(() => {
    fetchIconsData();
  }, []);

  const contactUsIconsData = [
    {
      logo: `/icons/facebook-logo.svg`,
      alt: "facebook",
      url: iconsData?.facebook,
    },
    {
      logo: `/icons/instagram-logo.svg`,
      alt: "instagram",
      url: iconsData?.instagram,
    },
    {
      logo: `/icons/whatsapp-logo.svg`,
      alt: "whatsapp",
      url: iconsData?.whatsapp,
    },
    {
      logo: `/icons/email-logo.svg`,
      alt: "email",
      url: iconsData?.email,
    },
  ];

  return (
    <HeaderDrawerContactUsWrapper>
      {contactUsIconsData.map((item, index) => (
        <MainFooterContactIcon key={index} to={item.url || ""} target="_blank">
          <HeaderDrawerContactUsImg src={item.logo} alt={item.alt} />
        </MainFooterContactIcon>
      ))}
    </HeaderDrawerContactUsWrapper>
  );
};

export default ServicesBurgerDrawerContactUsIcons;
