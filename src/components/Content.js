import React, { useEffect, useState } from "react";
import { Videos } from "./Index";
import { fetchFromApi } from "../utils/FetchFromApi";

function Content({ selectedCategory }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  // videos.forEach(e => {
  //   if (e.id.kind === "youtube#channel") {
  //     console.log('canal');
  //   }
  // })

  return (
    <div className="">
      <h1 className="text-3xl pl-3 pt-3">{selectedCategory} Videos</h1>

      <div className="">
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default Content;
