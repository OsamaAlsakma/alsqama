import { MainFooterContactIcon } from "~/core/main/view/footer-section/wrapper/style";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FooterIconsWrapper } from "~/core/main/view/footer-section/footer-icons/style";
import { useEffect, useState } from "react";
import axios from "axios";
import { MainFooterIconsResponse } from "~/bootstrap/helper/global-types";

const MainFooterIcons = () => {
  const iconsDimensions = {
    width: "32px",
    height: "32px",
  };

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

  return (
    <FooterIconsWrapper>
      <MainFooterContactIcon to={iconsData?.facebookUrl || ""} target="_blank">
        <FacebookRoundedIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
      <MainFooterContactIcon to={iconsData?.telegramUrl || ""} target="_blank">
        <TelegramIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
      <MainFooterContactIcon to={iconsData?.whatsappUrl || ""} target="_blank">
        <WhatsAppIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
      <MainFooterContactIcon
        to={`mailto:${
          iconsData?.email.emailUrl || ""
        }?subject=${encodeURIComponent(
          iconsData?.email.title || ""
        )}&body=${encodeURIComponent(iconsData?.email.body || "")}`}
        target="_blank"
      >
        <MailRoundedIcon style={{ ...iconsDimensions }} />
      </MainFooterContactIcon>
    </FooterIconsWrapper>
  );
};

export default MainFooterIcons;
