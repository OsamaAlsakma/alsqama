import {
  ChaletsDetailsTitlePadding,
  ChaletsDetailsTitle,
} from "~/core/chalets/view/details-section/title-section/wrapper/style";

interface IChaletsDetailsTitleWrapperProps {
  title: string;
}
const ChaletsDetailsTitleWrapper = (
  props: IChaletsDetailsTitleWrapperProps
) => {
  const { title } = props;
  return (
    <ChaletsDetailsTitlePadding>
      <ChaletsDetailsTitle>{title}</ChaletsDetailsTitle>
    </ChaletsDetailsTitlePadding>
  );
};

export default ChaletsDetailsTitleWrapper;
