import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Details.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import Similar from "./detailCarousel/Similar";
import Recommendation from "./detailCarousel/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <>
      <DetailsBanner crew={credits?.crew} video={data?.results?.[0]} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;
