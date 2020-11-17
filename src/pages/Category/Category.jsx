import React from "react";
import { Nav, CategoryFilter, CategoryList } from "components";
import "./Category.css";

function Category({ match }) {
  return (
    <section id="category">
      <Nav />
      <CategoryFilter />
      <CategoryList category={match.params.item} />
    </section>
  );
}

export default Category;
