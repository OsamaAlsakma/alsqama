import {
  MainPageSlideDescription,
  MainPageSlideDescriptionTitle,
} from "./style";

type IProps = {
  title: string;
  subtitle: string;
};

const MainSlideDescription = ({ title, subtitle }: IProps) => {
  return (
    <MainPageSlideDescription>
      <MainPageSlideDescriptionTitle>{title}</MainPageSlideDescriptionTitle>
      {subtitle}
    </MainPageSlideDescription>
  );
};

export default MainSlideDescription;
