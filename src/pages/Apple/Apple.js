import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import useFetch from "../../hooks/useFetch";
import NewsCard from "../../components/NewsCard/NewsCard";
import Loading from "../../components/Loading/Loading";

const Apple = () => {
  const { data, loading } = useFetch("everything", "q=apple&sortBy=popularity");

  return (
    <main className="max-w-screen-xl mx-auto py-12 px-5 min-h-screen">
      {loading ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <PageTitle title={"All articles mentioning Apple"} />
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

export default Apple;
