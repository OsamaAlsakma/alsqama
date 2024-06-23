import { appBaseUrl } from "~/bootstrap/helper/global-helper";

export const servicesPageEndpoint = {
  main: "/alsqama",
  chalets: "/alsqama/chalets",
  halls: "/alsqama/halls",
  hotels: "/alsqama/hotels",
  apartments: "/alsqama/apartments",
};

export const supportEndpoint = {
  termsOfUse: `/${appBaseUrl}/termsOfUse`,
  privacyPolicy: `/${appBaseUrl}/privacyPolicy`,
};

export const endpointsUrl = {
  /* --------------------------------- Signup --------------------------------- */
  signupEndpoint: "https://frontiertech.dev/saqama/public/api/register",
  loginEndpoint: "https://frontiertech.dev/saqama/public/api/login",
  /* --------------------------------- Chalets -------------------------------- */
  // allChalets: "https://run.mocky.io/v3/1f9928c2-205e-4319-94b5-5e214bdd168e",
  allChalets:
    "https://frontiertech.dev/saqama/public/api/accommodations?type=chalets",
  chaletDetails: "https://run.mocky.io/v3/0d10feea-c7c4-40c9-b88a-802cb8cc35de",

  /* --------------------------------- Hotels --------------------------------- */
  // allHotels: "https://run.mocky.io/v3/ce859f40-97f7-4cbe-bfa3-8b02873024c2",
  allHotels:
    "https://frontiertech.dev/saqama/public/api/accommodations?type=hotels",

  anHotelItems: "https://run.mocky.io/v3/52546746-7763-4744-8e3d-8bd747b2eade",
  // hotelItemDetails:
  // "https://run.mocky.io/v3/040223a6-4d38-489e-9de8-76be929aefd6",
  hotelItemDetails: "https://frontiertech.dev/saqama/public/api/rooms",

  /* ---------------------------------- Halls --------------------------------- */
  // allHalls: "https://run.mocky.io/v3/f76776a1-a244-41e1-a011-5291ab03a345",
  allHalls:
    "https://frontiertech.dev/saqama/public/api/accommodations?type=halls",
  // hallDetails: "https://run.mocky.io/v3/d49421bf-2eb8-4a5b-80b2-29a475dc36f1",
  hallDetails: "https://frontiertech.dev/saqama/public/api/accommodations",

  /* ------------------------------- Appartments ------------------------------ */
  allAppartments:
    "https://run.mocky.io/v3/d219b58c-4d07-4ce6-86df-918305bb3fbe",
  appartmentDetails:
    "https://run.mocky.io/v3/d49421bf-2eb8-4a5b-80b2-29a475dc36f1",

  /* ------------------------------ Terms of use ------------------------------ */
  termsOfUse: "https://run.mocky.io/v3/e1a71449-ab92-4f8b-8f50-11ac458a7ab7",
  /* ----------------------------- Privacy policy ----------------------------- */
  privacyPolicy: "https://run.mocky.io/v3/ebd45a15-ac57-40ab-967a-262eb88af780",
};
