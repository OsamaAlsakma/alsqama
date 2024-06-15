import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import { FC } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useLocation } from "react-router";
import { primaryColor } from "~/bootstrap/helper/global-helper";
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
        >
          مشاركة
        </DetailsFastDescriptionButton>
      </CopyToClipboard>
    </StyledDetailsFastDescriptionItemsAndShareWrapper>
  );
};

export default DetailsPageFastDescriptionAndShare;
