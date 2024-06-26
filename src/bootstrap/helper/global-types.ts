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

/* -------------------------------------------------------------------------- */
/*                               main page types                              */
/* -------------------------------------------------------------------------- */
/* ---------------------------- main page slides ---------------------------- */
type MainPageSlide = {
  title: string;
  description: string;
  image: string;
};

export type MainPageSlides = MainPageSlide[];

/* ------------------------------ our services ------------------------------ */
type OurServiceType = {
  title: string;
  description: string;
};

export type OurServices = OurServiceType[];

/* ------------------------- discount and marketing ------------------------- */
export type DiscountAndMarketing = {
  title: string;
  description: string;
  firstColumn: string[];
  secondColumn: string[];
  thirdColumn: string[];
  fourthColumn: string[];
};

/* --------------------------- repeated questions --------------------------- */
export type RepeatedQuestions = { question: string; answer: string }[];
