import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import { ChaletsDetailsDescriptionTitle } from "~/core/chalets/view/details-section/description-section/wrapper/style";

interface IChaletsDetailsTitleWrapperProps {
  description: string;
}
const ChaletsDetailsDescriptionWrapper = (
  props: IChaletsDetailsTitleWrapperProps
) => {
  const { description } = props;
  return (
    <HandlingSectionPaddingWrapper>
      <ChaletsDetailsDescriptionTitle>
        وصف الشاليه
      </ChaletsDetailsDescriptionTitle>
      <p>{description}</p>
    </HandlingSectionPaddingWrapper>
  );
};

export default ChaletsDetailsDescriptionWrapper;
