import React, { useEffect, useState } from "react";
import Article from "./Article";
import SliderResponsive from "./SliderResponsive";
import { useWindowSize } from "./widthWindow";

export default function PopularArticlesBlockList({ articles }) {
  const size = useWindowSize();
  return (
    <section className="flex justify-center max-w-full">
      <div className="flex flex-col    md:w-full">
        <h2 className="flex justify-center text-4xl fonts-title_popular-block">
          ПОПУЛЯРНОЕ
        </h2>
        <div className="flex justify-center">
          {size.width < 768 ? (
            <SliderResponsive article={articles} />
          ) : (
            articles.map((article) => (
              <Article key={article.id} article={article} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
