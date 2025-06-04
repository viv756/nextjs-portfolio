"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="heading">
        Technologies & Tools:
        <span className="text-purple"> Mastery in Action</span>
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
