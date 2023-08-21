import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const onTabChange = (tab, index) => {
    setEndPoint(tab === "Movie" ? "movie" : "tv");
  };

  const { data, loading } = useFetch(`/${endPoint}/popular`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTab data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default Popular;
