import React from "react";
import Card from "../Card/Card";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Articles = () => {
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <Card className="my-card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <Card className="my-card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg">
        <span>More articles</span>
        <KeyboardArrowRightIcon className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
