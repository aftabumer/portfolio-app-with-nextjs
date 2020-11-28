import React from "react";
import BaseLayout from "../../../components/layouts/BaseLayout";

const PortfolioId = ({ portfolio_id }) => {
  console.log(portfolio_id);
  return (
    <BaseLayout>
      <h1>I am Portfolio Page</h1>
      <h2>{portfolio_id}</h2>
    </BaseLayout>
  );
};

PortfolioId.getInitialProps = (ctx) => {
  debugger;
  const { portfolio_id } = ctx["query"];
  return { portfolio_id };
};

export default PortfolioId;
