import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import { FC, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { primaryColor } from "~/bootstrap/helper/global-helper";
import langKey from "~/bootstrap/i18n/langKey";
import AlertMessage from "~/generic/components/alert-message/alert-message";
import {
  StyledDetailsFastDescriptionItemsAndShareWrapper,
  DetailsFastDescriptionItemsWrapper,
  DetailsFastDescriptionButton,
  DetailsFastDescriptionShareIcon,
  CopyToClipboardWrapper,
} from "~/generic/components/fast-description-and-share/style";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
type ItemType = {
  icon: SvgIconComponent | FC;
  title?: string;
};
interface IDetailsFastDescriptionAndShareProps {
  items: ItemType[];
}
const DetailsPageFastDescriptionAndShare = (
  props: IDetailsFastDescriptionAndShareProps
) => {
  const urlPathname = useLocation().pathname;
  const { items } = props;

  // message
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <StyledDetailsFastDescriptionItemsAndShareWrapper>
      {/* items */}
      <DetailsFastDescriptionItemsWrapper>
        {items.map((item: ItemType, index: number) => {
          return item.title ? (
            <DetailsFastDescriptionButton
              key={index}
              startIcon={
                <SvgIcon
                  style={{ color: `${primaryColor}`, marginBottom: "5px" }}
                  component={item.icon}
                />
              }
            >
              {item.title}
            </DetailsFastDescriptionButton>
          ) : null;
        })}
        {/* share icon */}
        <CopyToClipboardWrapper>
          <CopyToClipboard text={urlPathname}>
            <DetailsFastDescriptionButton
              startIcon={<DetailsFastDescriptionShareIcon />}
              onClick={() => setOpen(true)}
            >
              {t(langKey.detailsPage.share)}
            </DetailsFastDescriptionButton>
          </CopyToClipboard>
        </CopyToClipboardWrapper>
      </DetailsFastDescriptionItemsWrapper>

      <AlertMessage
        durationInMs={2000}
        message={t(langKey.detailsPage.successCopyMessage)}
        open={open}
        setOpen={setOpen}
      />
    </StyledDetailsFastDescriptionItemsAndShareWrapper>
  );
};

export default DetailsPageFastDescriptionAndShare;
