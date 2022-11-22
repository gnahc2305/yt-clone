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
    <div className='overflow-auto'>
      <h1 className="text-4xl p-5">{selectedCategory} Videos</h1>

      <div>
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default Content;
