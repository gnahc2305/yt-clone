import React, { useEffect, useState } from "react";
import { Videos } from "./Index";
import { fetchFromApi } from "../utils/FetchFromApi";

function Content() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className=''>
      <h1 className="text-3xl pl-3 pt-3">{selectedCategory} Videos</h1>

      <div className='overflow-auto'>
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default Content;
