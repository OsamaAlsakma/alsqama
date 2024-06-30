import { SocialMediaIconsType } from "~/bootstrap/helper/global-types";

enum SocialMediaIconTypeResponse {
  facebook = "bx bxl-facebook",
  whatsapp = "bx bxl-whatsapp",
  instagram = "bx bxl-instagram",
  email = "bx bxl-envelope",
}

export type SocialMediaIconsResponse = {
  icon: SocialMediaIconTypeResponse;
  url: string;
};

export const getSocialMediaIconsDTO = (
  response: SocialMediaIconsResponse[]
): SocialMediaIconsType => {
  const result: SocialMediaIconsType = {
    facebook: "",
    whatsapp: "",
    instagram: "",
    email: "",
  };
  response.forEach((item) => {
    switch (item.icon) {
      case SocialMediaIconTypeResponse.facebook:
        result.facebook = item.url;
        break;
      case SocialMediaIconTypeResponse.whatsapp:
        result.whatsapp = `https://wa.me/${item.url}`;
        break;
      case SocialMediaIconTypeResponse.instagram:
        result.instagram = item.url;
        break;
      case SocialMediaIconTypeResponse.email:
        result.email = `mailto:${item.url || ""}?subject=${encodeURIComponent(
          ""
        )}&body=${encodeURIComponent("")}`;
        break;
      default:
        break;
    }
  });
  return result;
};
