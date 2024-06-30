export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type SocialMediaIconsType = {
  facebook: string;
  whatsapp: string;
  instagram: string;
  email: string;
};

export type ResservedDateType = {
  accommodations_id: string;
  sub_accommodations_id: string | null;
  user_id: string;
  name: string;
  phone_number: string;
  start_date: string; // YYYY-MM-DD
  end_date: string; // YYYY-MM-DD
};

/* -------------------------------------------------------------------------- */
/*                               main page types                              */
/* -------------------------------------------------------------------------- */

/* ------------------------- discount and marketing ------------------------- */
export type DiscountAndMarketing = {
  title: string;
  description: string;
  firstColumn: string[];
  secondColumn: string[];
  thirdColumn: string[];
  fourthColumn: string[];
};

/* -------------------------------------------------------------------------- */
/*                       privacy policy and terms of use                      */
/* -------------------------------------------------------------------------- */
export type TermOfUseAndPrivacyResponse = {
  id: string;
  title: string;
  description: string;
};

export type TermOfUseAndPrivacyType = {
  title: string;
  body: string;
};
