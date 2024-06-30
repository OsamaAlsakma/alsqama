import { MainFooterContactIcon } from "~/core/main/view/footer-section/wrapper/style";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FooterIconsWrapper } from "~/core/main/view/footer-section/footer-icons/style";
import { useEffect, useState } from "react";
import axios from "axios";
import { SocialMediaIconsType } from "~/bootstrap/helper/global-types";
import {
  SocialMediaIconsResponse,
  getSocialMediaIconsDTO,
} from "~/core/main/view/footer-section/footer-icons/get-social-media-icons-dto";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";

const MainFooterIcons = () => {
  const iconsDimensions = {
    width: "32px",
    height: "32px",
  };

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

  return (
    <FooterIconsWrapper>
      <MainFooterContactIcon to={iconsData?.facebook || ""} target="_blank">
        <FacebookRoundedIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
      <MainFooterContactIcon to={iconsData?.instagram || ""} target="_blank">
        <TelegramIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
      <MainFooterContactIcon to={iconsData?.whatsapp || ""} target="_blank">
        <WhatsAppIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
      <MainFooterContactIcon
        to={`mailto:${iconsData?.email || ""}`}
        target="_blank"
      >
        <MailRoundedIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
    </FooterIconsWrapper>
  );
};

export default MainFooterIcons;
