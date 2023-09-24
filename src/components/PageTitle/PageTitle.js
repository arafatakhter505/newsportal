import React from "react";

const PageTitle = ({ title }) => {
  return (
    <section className="mb-12 border-2 p-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </section>
  );
};

export default PageTitle;
