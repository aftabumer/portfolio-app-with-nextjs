import React from "react";
import BaseLayout from "../../../components/layouts/BaseLayout";
import axios from "axios";

const PortfolioId = ({ portfolio }) => {
  return (
    <BaseLayout>
      <h1>I am Portfolio Page</h1>
      <h1>{portfolio.title}</h1>
      <p>Body: {portfolio.body}</p>
      <p>Id: {portfolio.id}</p>
    </BaseLayout>
  );
};

PortfolioId.getInitialProps = async (ctx) => {
  const { portfolio_id } = ctx["query"];
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${portfolio_id}`
  );
  const posts = res.data;
  return { portfolio: posts };
};

export default PortfolioId;
