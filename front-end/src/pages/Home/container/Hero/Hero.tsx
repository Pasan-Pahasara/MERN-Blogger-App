import React from "react";
import { images } from "../../../../constants/Images";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-ubuntu text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">Read the most interesting articles</h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia
          dolorem beatae ipsa, laboriosam assumenda perspiciatis aut culpa ex,
          numquam deleniti distinctio! Eos, doloremque. Laboriosam repudiandae
          cumque amet totam minus?
        </p>
        <div>
          <div>
            <input type="text" />
          </div>
          <button>Search</button>
        </div>
        <div>
          <span>Popular Tags</span>
          <ul>
            <li>React Native</li>
            <li>React</li>
            <li>UI UX</li>
          </ul>
        </div>
      </div>
      
      <div className="hidden">
      <img src={images.HeroImage} alt="users are reading articles" />
      </div>
    </section>
  );
};

export default Hero;
