import React from "react";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row md:flex-row justify-center items-center lg:mx-10 mt-6 lg:mt-0">
      <div className="flex flex-col px-8">
        <div className="flex flex-row">
          <img src="/dog.svg" alt="Logo" className="lg:w-20 md:w-10 w-12 mb-4 " />
          <h1 className="text-4xl  lg:text-7xl font-bold ">DOGGIPEDIA</h1>
        </div>
        <p className="text-lg max-w-xl">
          Trusted source for all things dogs. Compiled by experts and dog
          lovers, we are committed to providing accurate and useful information
          to dog owners around the world.
        </p>
        <Link to="/product" className="mt-4">
          <Button variant="default">
            let's look for data on your favorite dog
          </Button>
        </Link>
      </div>
      <img src="/hero.png" alt="A happy dog" className="lg:w-[31%] md:w-[44%] sm:w-[54%] w-[54%] object-contain" />
    </div>
  );
};

export default Hero;
