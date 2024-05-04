/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */
export const appHeaderHeight = "70px";
export const paddingBigScreens = "5%";
export const paddingMediumScreens = "3.5%";
export const paddingSmallScreens = "3%";
export const primaryColor = "#5a409b";
export const secondaryColor = "#F2C900";

export const smallScreenSize = "480px";
export const mediumScreenSize = "768px";
export const largeScreenSize = "1024px";
export const extraLargeScreenSize = "1200px";

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
