import  { useEffect } from "react";
import { useParams } from "react-router";

const ChaletDetailsPage = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log("first", id);
  }, [id]);
  return <div>chalet-details-page {id}</div>;
};

export default ChaletDetailsPage;
