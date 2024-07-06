import {
  WebisteDescriptionContainer,
  WebisteDescriptionText,
  WebisteDescriptionTitle,
} from "~/core/main/view/contact-us-section/website-description/style";
interface IMainContactUsWebisteDescriptionProps {
  title: string;
  description: string;
}
const MainContactUsWebisteDescription = (
  props: IMainContactUsWebisteDescriptionProps
) => {
  const { title, description } = props;
  return (
    <WebisteDescriptionContainer className="description">
      <WebisteDescriptionTitle>{title}</WebisteDescriptionTitle>
      <WebisteDescriptionText>{description}</WebisteDescriptionText>
    </WebisteDescriptionContainer>
  );
};

export default MainContactUsWebisteDescription;
