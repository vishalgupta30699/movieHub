import React from "react";
import { useSelector } from "react-redux";
import "./Genres.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  console.log(genres,data)

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div className="genre" key={g}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
