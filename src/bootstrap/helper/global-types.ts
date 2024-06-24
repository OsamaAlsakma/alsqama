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
  accommodations_id: string;
  sub_accommodations_id: string | null;
  user_id: string;
  name: string;
  phone_number: string;
  start_date: string;
  end_date: string;
};
