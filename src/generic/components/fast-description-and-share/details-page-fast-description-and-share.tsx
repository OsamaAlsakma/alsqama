import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import { FC, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useLocation } from "react-router";
import { primaryColor } from "~/bootstrap/helper/global-helper";
import AlertMessage from "~/generic/components/alert-message/alert-message";
import {
  StyledDetailsFastDescriptionItemsAndShareWrapper,
  DetailsFastDescriptionItemsWrapper,
  DetailsFastDescriptionButton,
  DetailsFastDescriptionShareIcon,
} from "~/generic/components/fast-description-and-share/style";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
type ItemType = {
  icon: SvgIconComponent | FC;
  title: string;
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

  return (
    <StyledDetailsFastDescriptionItemsAndShareWrapper>
      {/* items */}
      <DetailsFastDescriptionItemsWrapper>
        {items.map((item: ItemType, index: number) => {
          return (
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
          );
        })}
      </DetailsFastDescriptionItemsWrapper>
      {/* share icon */}
      <CopyToClipboard text={urlPathname}>
        <DetailsFastDescriptionButton
          startIcon={<DetailsFastDescriptionShareIcon />}
          onClick={() => setOpen(true)}
        >
          مشاركة
        </DetailsFastDescriptionButton>
      </CopyToClipboard>
      <AlertMessage
        durationInMs={2000}
        message="تم النسخ بنجاح"
        open={open}
        setOpen={setOpen}
      />
    </StyledDetailsFastDescriptionItemsAndShareWrapper>
  );
};

export default DetailsPageFastDescriptionAndShare;
