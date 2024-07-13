import { MainDiscountsWrapperType } from "~/core/main/view/discounts-section/wrapper/main-discounts-wrapper";

export interface MainDiscountsWrapperResponse {
  title: string;
  description: string;
  firstColumn: { attachment_path: string }[];
  secondColumn: { attachment_path: string }[];
  thirdColumn: { attachment_path: string }[];
  fourthColumn: { attachment_path: string }[];
}

export const getDiscountsDto = (
  response: MainDiscountsWrapperResponse
): MainDiscountsWrapperType => {
  const discountsEntity: MainDiscountsWrapperType = {
    title: response.title,
    description: response.description,
    firstCollumn: response.firstColumn.map((image) => image.attachment_path),
    secondColumn: response.secondColumn.map((image) => image.attachment_path),

    thirdColumn: response.thirdColumn.map((image) => image.attachment_path),
    fourthColumn: response.fourthColumn.map((image) => image.attachment_path),
  };
  return discountsEntity;
};
