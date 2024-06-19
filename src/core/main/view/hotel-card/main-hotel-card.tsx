import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";
import langKey from "~/bootstrap/i18n/langKey";
import IMainHotelCardProps from "~/core/main/view/hotel-card/i-main-hotel-card-props";
import {
  StyledCard,
  StyledMainHotelCardButton,
  StyledMainHotelCardCardActions,
  StyledMainHotelCardNumberOfHotels,
} from "~/core/main/view/hotel-card/style";

const MainHotelCard = (props: IMainHotelCardProps) => {
  const { vm } = props;
const {t} = useTranslation()
  return (
    <StyledCard sx={{ boxShadow: 4 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={`${vm.props.image}`}
        title={vm.props.title}
      />
      <CardContent>
        <Typography
          style={{ display: "flex", alignContent: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {vm.props.title}
          <StyledMainHotelCardNumberOfHotels>
            28 فندق
          </StyledMainHotelCardNumberOfHotels>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vm.props.shortDescription}
        </Typography>
      </CardContent>
      <StyledMainHotelCardCardActions>
        <StyledMainHotelCardButton>{t(langKey.mainPage.surfHotels)}</StyledMainHotelCardButton>
      </StyledMainHotelCardCardActions>
    </StyledCard>
  );
};

export default MainHotelCard;
