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

export const mainPageEndpointsUrl = {
  mainPageSlide: "https://frontiertech.dev/saqama/public/api/main-sliders",
  mainPageOurServices:
    "https://frontiertech.dev/saqama/public/api/main-services",
  mainPageRepeatedQuestions:
    "https://frontiertech.dev/saqama/public/api/repeated-questions",
  /* -------------------------------------------------------------------------- */
  termsOfUse: "https://frontiertech.dev/saqama/public/api/terms-conditions",
  /* -------------------------------------------------------------------------- */
  privacyPolicy: "https://frontiertech.dev/saqama/public/api/policies",
  /* -------------------------------------------------------------------------- */
  contactUs: "https://frontiertech.dev/saqama/public/api/send-contact-email",
  /* -------------------------------------------------------------------------- */
  socialMediaIcons: "https://frontiertech.dev/saqama/public/api/social-icons",
};

export const endpointsUrl = {
  /* --------------------------------- Signup --------------------------------- */
  signupEndpoint: "https://frontiertech.dev/saqama/public/api/register",
  /* ---------------------------------- login --------------------------------- */
  loginEndpoint: "https://frontiertech.dev/saqama/public/api/login",
  /* ------------------------ pay and send information ------------------------ */
  payEndpoint: "https://frontiertech.dev/saqama/public/api/reservations",
  /* --------------------------------- Chalets -------------------------------- */
  allChalets:
    "https://frontiertech.dev/saqama/public/api/accommodations?type=chalets",
  chaletDetails: "https://run.mocky.io/v3/0d10feea-c7c4-40c9-b88a-802cb8cc35de",

  /* --------------------------------- Hotels --------------------------------- */
  allHotels:
    "https://frontiertech.dev/saqama/public/api/accommodations?type=hotels",

  anHotelItems: "https://run.mocky.io/v3/52546746-7763-4744-8e3d-8bd747b2eade",
  hotelItemDetails: "https://frontiertech.dev/saqama/public/api/rooms",

  /* ---------------------------------- Halls --------------------------------- */
  allHalls:
    "https://frontiertech.dev/saqama/public/api/accommodations?type=halls",
  hallDetails: "https://frontiertech.dev/saqama/public/api/accommodations",

  /* ------------------------------- Appartments ------------------------------ */
  allAppartments:
    "https://frontiertech.dev/saqama/public/api/accommodations?type=appartments",
  appartmentDetails:
    "https://frontiertech.dev/saqama/public/api/accommodations",
};
