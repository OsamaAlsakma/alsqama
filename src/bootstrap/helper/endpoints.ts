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
  /* --------------------------------- Chalets -------------------------------- */
  allChalets: "https://run.mocky.io/v3/ed159a89-6359-45d4-b086-9532194d403f",
  chaletDetails: "https://run.mocky.io/v3/e3a1ca8d-c899-43cf-9141-acca861a2083",

  /* --------------------------------- Hotels --------------------------------- */
  allHotels: "https://run.mocky.io/v3/8b968fb9-76f0-4284-8497-307381c734d8",
  anHotelItems: "https://run.mocky.io/v3/40833494-3132-4a60-bf5e-c39cc1681d38",
  hotelItemDetails:
    "https://run.mocky.io/v3/26f72494-647d-4ac3-a4d1-f496fd6e73da",

  /* ---------------------------------- Halls --------------------------------- */
  allHalls: "https://run.mocky.io/v3/2f479d6f-b040-4049-9ef9-73d04d6e5a69",
  hallDetails: "https://run.mocky.io/v3/e7e2d34c-9c58-4c4d-8b0e-ba63e8e6e498",

  /* -------------------------------- Retreats -------------------------------- */
  allRetreats: "https://run.mocky.io/v3/ac044f62-0728-499b-9a4a-9684c27040d2",
  retreatDetails:
    "https://run.mocky.io/v3/9d469e41-7e1f-473e-9a2e-6e831f5daa6f",

  /* ------------------------------ Terms of use ------------------------------ */
  termsOfUse: "https://run.mocky.io/v3/e0cf18f0-e139-463f-ad8e-6a5b37b62b41",
  /* ----------------------------- Privacy policy ----------------------------- */
  privacyPolicy: "https://run.mocky.io/v3/1781d7b7-683d-4308-9ca5-a09c35ee423b",
};
