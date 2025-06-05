"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

// Sample icon URLs for the stacks
const techIcons: any = {
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  reactjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  expressjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  tailwind: "https://www.svgrepo.com/show/374118/tailwind.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  cleanarch:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Clean_Architecture_core.svg/2146px-Clean_Architecture_core.svg.png",
  mvc: "https://static.thenounproject.com/png/5340614-200.png",
  webrtc: "https://www.svgrepo.com/show/354551/webrtc.svg",
  socketio: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  zegocloud: "https://www.freeiconspng.com/uploads/rain-cloud-icon-14.png",
  datastructures: "https://cdn-icons-png.freepik.com/512/10611/10611413.png",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  scss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  postman: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  insomnia: "https://www.svgrepo.com/show/353904/insomnia.svg",
  cicd: "https://d585tldpucybw.cloudfront.net/sfimages/default-source/productsimages/teststudio/continuous-integration-testing-illustration.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  zustand:
    "https://i.namu.wiki/i/lWcXbpCwKlTNMM2v_SiGVK5Q6XsnTOvH6txHs25DbpbP_XGDum3MfxpNHYDCGHxuqGeZaJ8PVZLWO9LJFGFGAA.webp",
  vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  render:
    "https://cdn.sanity.io/images/34ent8ly/production/ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png",
  netlify: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  razorpay: "https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png",
  oauth: "https://www.svgrepo.com/show/354135/oauth.svg",
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    iconKey: string; // Add iconKey for matching tech icon
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "mt-32 scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[60vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] relative rounded-2xl border border-b-0 flex-shrink-0  border-slate-800 p-4 bg-gradient-to-b from-[#131c4a] to-[#000000]"
            key={idx}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <div className="relative z-20 flex flex-col items-center justify-center text-center">
                {/* Tech stack icon */}
                <img
                  src={techIcons[item.iconKey]}
                  alt={`${item.iconKey} icon`}
                  className="w-12 h-12 mb-3"
                />
                <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.quote}
                </span>
                <span className="mt-2 text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
