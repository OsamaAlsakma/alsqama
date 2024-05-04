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
export const normalizeInput = (value: string) => {
  if (!value) return value;
  const currentValue = value.replace(/[^\d]/g, "");
  const cvLength = currentValue.length;
  if (cvLength < 4) return currentValue;
  if (cvLength < 7)
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
  return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
    3,
    6
  )}-${currentValue.slice(6, 10)}`;
};
