import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import {
  ChaletsDetailsDescriptionDescription,
  ChaletsDetailsDescriptionTitle,
} from "~/core/chalets/view/details-section/description-section/wrapper/style";

interface IChaletsDetailsTitleWrapperProps {
  name: string;
  description: string;
}
const ChaletsDetailsDescriptionWrapper = (
  props: IChaletsDetailsTitleWrapperProps
) => {
  const { name, description } = props;
  return (
    <HandlingSectionPaddingWrapper>
      <ChaletsDetailsDescriptionTitle>
        وصف {name}
      </ChaletsDetailsDescriptionTitle>
      <ChaletsDetailsDescriptionDescription>
        {description}
      </ChaletsDetailsDescriptionDescription>
    </HandlingSectionPaddingWrapper>
  );
};

export default ChaletsDetailsDescriptionWrapper;
