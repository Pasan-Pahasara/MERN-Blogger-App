import React from "react";
import { images } from "../../../../constants/Images";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Read the most interesting articles</h1>
        <p>
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
      <img src={images.HeroImage} alt="users are reading articles" />
      <div></div>
    </section>
  );
};

export default Hero;
