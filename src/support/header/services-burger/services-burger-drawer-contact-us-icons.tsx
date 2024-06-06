import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { appBaseUrl } from "~/bootstrap/helper/global-helper";
import { MainFooterIconsResponse } from "~/bootstrap/helper/global-types";
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
  const [iconsData, setIconsData] = useState<MainFooterIconsResponse>();

  const fetchIconsData = async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/0d7da3b2-a2d4-43d4-84f8-394bcbebc915"
    );
    const icons: MainFooterIconsResponse = response.data;
    setIconsData({
      facebookUrl: icons.facebookUrl,
      telegramUrl: icons.telegramUrl,
      whatsappUrl: icons.whatsappUrl,
      email: {
        emailUrl: icons.email.emailUrl,
        title: icons.email.title,
        body: icons.email.body,
      },
    });
  };
  useEffect(() => {
    fetchIconsData();
  }, []);

  const contactUsIconsData = [
    {
      logo: `/${appBaseUrl}/icons/facebook-logo.svg`,
      alt: "facebook",
      url: iconsData?.facebookUrl,
    },
    {
      logo:`/${appBaseUrl}/icons/instagram-logo.svg`,
      alt: "instagram",
      url: iconsData?.facebookUrl,
    },
    {
      logo: `/${appBaseUrl}/icons/whatsapp-logo.svg`,
      alt: "whatsapp",
      url: iconsData?.facebookUrl,
    },
    {
      logo: `/${appBaseUrl}/icons/email-logo.svg`,
      alt: "email",
      url: iconsData?.facebookUrl,
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
