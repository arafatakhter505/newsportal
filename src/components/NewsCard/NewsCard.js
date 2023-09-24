import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="card card-compact w-full mb-8 bg-base-100 shadow-xl">
      <figure>
        <img
          src={news && news.urlToImage}
          alt="news"
          className="w-full h-[250px]"
        />
      </figure>
      <div className="card-body">
        <a
          href={news && news.url}
          target="_blank"
          rel="noreferrer"
          className="card-title"
        >
          {news && news.title}
        </a>
        <p>{news && news.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            Author: {news && news.author}
          </div>
          <div className="badge badge-outline">{news && news.publishedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
