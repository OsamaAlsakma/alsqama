import dayjs from "dayjs";
import {
  TermOfUseAndPrivacyResponse,
  TermOfUseAndPrivacyType,
} from "~/bootstrap/helper/global-types";
/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Styling -------------------------------- */
export const appHeaderHeight = "70px";
export const paddingBigScreens = "5%";
export const paddingMediumScreens = "3.5%";
export const paddingSmallScreens = "3%";
export const primaryColor = "#5a409b";
export const secondaryColor = "#F2C900";
export const mainFontFamily = "Tajawal";

/* ------------------------------- Responsive ------------------------------- */
export const smallScreenSize = "480px";
export const mediumScreenSize = "768px";
export const largeScreenSize = "1024px";
export const extraLargeScreenSize = "1200px";

/* --------------------------- Business variables --------------------------- */
export const appBaseUrl = "";
export const websiteUrl = "https://hajjzi.com";
export const imagesUrl = "https://frontiertech.dev/saqama/storage/app/public";
export const defaulyPhoneCode = "+967";

/* -------------------------------------------------------------------------- */
/*                                   Methods                                  */
/* -------------------------------------------------------------------------- */
export const delayExecutionFor = <T extends string | number>(
  func: (arg: T) => void,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (arg: T) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(arg);
    }, delay);
  };
};
/* -------------------------------------------------------------------------- */
export const unNormalizeInput = (value: string) => {
  const currentValue = value.replace(/[^\d.]/g, "");
  return currentValue;
};

/* -------------------------------------------------------------------------- */
/**
 * Return all the dates between start and end dates
 */
export const getDatesBetweenStartAndEndDates = (
  startDate: dayjs.Dayjs,
  endDate: dayjs.Dayjs
) => {
  let currentDate = startDate;
  const dates: string[] = [];

  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
    dates.push(currentDate.format("YYYY-MM-DD"));
    currentDate = currentDate.add(1, "day");
  }
  return dates;
};

/* -------------------------------------------------------------------------- */
/*                     privacy policy and terms of use dto                    */
/* -------------------------------------------------------------------------- */
export const getTermOfUseAndPrivacyPolicyDTO = (
  response: TermOfUseAndPrivacyResponse[]
): TermOfUseAndPrivacyType[] => {
  return response.map((response: TermOfUseAndPrivacyResponse) => {
    const hallEntity: TermOfUseAndPrivacyType = {
      title: response.title,
      body: response.description,
    };
    return hallEntity;
  });
};
