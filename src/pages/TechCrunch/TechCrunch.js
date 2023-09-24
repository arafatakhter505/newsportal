import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import PageTitle from "../../components/PageTitle/PageTitle";
import NewsCard from "../../components/NewsCard/NewsCard";

const TechCrunch = () => {
  const { data, loading } = useFetch("top-headlines", "sources=techcrunch");

  return (
    <main className="max-w-screen-xl mx-auto py-12 px-5 min-h-screen">
      {loading ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <PageTitle title={"Top headlines from TechCrunch right now"} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {data.articles &&
              data.articles.map((news) => (
                <NewsCard key={news.title} news={news} />
              ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default TechCrunch;
