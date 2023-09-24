import React from "react";
import useFetch from "../../hooks/useFetch";

const HeroHeadLine = () => {
  const { data } = useFetch("top-headlines", "country=us&category=business");
  const newData = data.articles && data.articles.slice(0, 3);
  return (
    <div>
      <h2 className="text-2xl font-bold border-b-2 pb-2">
        Top business headlines
      </h2>
      <ul className="pt-8">
        {newData &&
          newData.map((news) => (
            <li key={news.title} className="pb-8">
              <span className="text-md py-2 px-3 border-2 rounded-full">
                {news.source.name}
              </span>
              <a href={news && news.url} target="_blank" rel="noreferrer">
                <h2 className="text-xl font-semibold mt-3">{news.title}</h2>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HeroHeadLine;
