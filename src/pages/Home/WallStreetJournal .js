import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import useFetch from "../../hooks/useFetch";

const WallStreetJournal = () => {
  const { data } = useFetch("everything", "domains=wsj.com");
  const newData = data.articles && data.articles.slice(0, 6);

  return (
    <div className="md:w-1/3">
      <h2 className="text-2xl font-bold border-y-2 py-2">
        Wall Street Journal
      </h2>
      <div className="mt-8">
        {newData &&
          newData.map((news) => <NewsCard key={news.title} news={news} />)}
      </div>
    </div>
  );
};

export default WallStreetJournal;
