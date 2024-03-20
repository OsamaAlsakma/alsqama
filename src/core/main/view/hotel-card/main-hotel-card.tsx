import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import IMainHotelCardProps from "~/core/main/view/hotel-card/i-main-hotel-card-props";

const MainHotelCard = (props: IMainHotelCardProps) => {
  const { vm } = props;
  return (
    <Card sx={{ maxWidth: 315 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={`${vm.props.image}`}
        title={vm.props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {vm.props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vm.props.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default MainHotelCard;
