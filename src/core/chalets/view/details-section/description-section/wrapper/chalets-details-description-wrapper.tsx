import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import { ChaletsDetailsDescriptionTitle } from "~/core/chalets/view/details-section/description-section/wrapper/style";

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
      <p>{description}</p>
    </HandlingSectionPaddingWrapper>
  );
};

export default ChaletsDetailsDescriptionWrapper;
