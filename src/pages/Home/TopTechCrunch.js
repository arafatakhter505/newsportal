import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import useFetch from "../../hooks/useFetch";

const TopTechCrunch = () => {
  const { data } = useFetch("top-headlines", "sources=techcrunch");
  return (
    <div className="md:w-2/3 md:pr-8 md:border-r-2">
      <h2 className="text-2xl font-bold border-y-2 py-2">
        Top headlines from TechCrunch
      </h2>
      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        {data.articles &&
          data.articles.map((news) => (
            <NewsCard key={news.title} news={news} />
          ))}
      </div>
    </div>
  );
};

export default TopTechCrunch;
