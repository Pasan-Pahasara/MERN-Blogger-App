import React from "react";
import Card from "../Card/Card";

const Articles = () => {
  return (
    <section className="container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
      <div>
        <Card className="my-card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <Card className="my-card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
    </section>
  );
};

export default Articles;
