import React from "react";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch";
import PageTitle from "../../components/PageTitle/PageTitle";
import NewsCard from "../../components/NewsCard/NewsCard";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data, loading } = useFetch("everything", `q=${queryTerm}`);

  return (
    <main className="max-w-screen-xl mx-auto py-12 px-5 min-h-screen">
      {loading ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <PageTitle
            title={
              data.articles && data.articles.length === 0
                ? `No result found for '${queryTerm}'`
                : `Result for '${queryTerm}'`
            }
          />
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

export default Search;
