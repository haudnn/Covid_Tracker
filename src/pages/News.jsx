import React, { useState, useEffect } from "react";
import { NEWS_EXPRESS } from "../api/apiConfig";
import axios from "axios";
import SkeletonCard from "../components/Skeleton";
const News = () => {
  const [DataNews, setDataNews] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const DataWorld = setTimeout(async () => {
      await axios.get(NEWS_EXPRESS).then((c) => setDataNews(c.data.data));
      setLoading(false);
    }, 1000);
    return () => clearTimeout(DataWorld);
  }, []);
  return (
    <>
      {Loading && <SkeletonCard />}
      {!Loading && (
        <div className="mt-4 w-full flex ">
          {DataNews["1005226"] && (
            <div className="mx-auto md:w-1/2 p-3 bg-white  rounded-lg">
              {DataNews["1005226"].data.map((item, index) => (
                <a href={item.share_url} key={index} className=" mt-4">
                  <div className="mt-5">
                    <img
                      src={item.thumbnail_url}
                      alt=""
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className=" text-gray-700 text-[20px] font-semibold my-2">
                    {item.title}
                  </div>
                  <span className="mb-4 font-normal ">{item.lead}</span>
                  <div className="text-[12px] text-gray-300">
                    Theo VnExpress
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default News;
