import {
  MainPageSlideDescription,
  MainPageSlideDescriptionTitle,
} from "~/core/main/view/slide-description/style";

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
