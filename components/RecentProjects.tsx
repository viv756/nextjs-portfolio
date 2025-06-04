"use client";

import Image from "next/image";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const RecentProjects = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 " id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <CardContainer className="inter-var" key={item.id}>
            <CardBody className="relative group/card w-full h-auto rounded-xl p-6 border bg-gradient-to-b from-[#131c4a] to-[#000000] dark:border-white/[0.2] dark:bg-black dark:text-white border-black/[0.1] transition-transform duration-300 transform hover:scale-105">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {item.des}
              </CardItem>
              <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                <Image
                  src={item.img}
                  height={600}
                  width={800}
                  className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 min-h-[56px]">
                <CardItem
                  translateZ={20}
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full sm:w-auto text-center">
                  View Live Site →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full sm:w-auto text-center">
                  View Source Code →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
