export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type MainFooterIconsResponse = {
  facebookUrl: string;
  telegramUrl: string;
  whatsappUrl: string;
  email: {
    emailUrl: string;
    title: string;
    body: string;
  };
};

export type ResservedDateType = {
  name: string;
  phoneNumber: string;
  startDate: string;
  endDate: string;
};
