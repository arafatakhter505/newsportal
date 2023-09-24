import React from "react";
import useFetch from "./../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

const HeroBanner = () => {
  const { data, loading } = useFetch("everything", "q=apple&sortBy=popularity");
  const news = data.articles && data.articles[0];

  return (
    <div className="relative">
      {loading ? (
        <Loading />
      ) : (
        <a href={news && news.url} target="_blank" rel="noreferrer">
          <img
            src={news && news.urlToImage}
            alt="news"
            className="w-full rounded-lg"
          />
          <div className="bg-black/50 text-white text-2xl rounded-b-lg md:p-8 p-3 absolute bottom-0 w-full">
            <h2>{news && news.title}</h2>
          </div>
        </a>
      )}
    </div>
  );
};

export default HeroBanner;
