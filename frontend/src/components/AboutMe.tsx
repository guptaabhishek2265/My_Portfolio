import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import {
  Icon3dCubeSphere,
  IconBrandDjango,
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandVercel,
} from "@tabler/icons-react";
import { TracingBeam } from "./ui/tracing-beam";
import { AuroraBackground } from "./ui/aurora-background";
import { FloatingNav } from "./ui/FloatingNavbar";
import { PinContainer } from "./ui/Pin";

const AboutMe = () => {
  const [col1, setCol1] = useState("gray");
  const [col2, setCol2] = useState("gray");
  const [col3, setCol3] = useState("gray");
  useEffect(() => {
    const handleScroll = () => {
      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");
      if (div1) {
        const { top } = div1.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        if (top < screenHeight / 4) {
          setCol1("teal");
        } else {
          setCol1("gray");
        }
      }
      if (div2) {
        const { top } = div2.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        if (top < screenHeight / 4) {
          setCol2("teal");
        } else {
          setCol2("gray");
        }
      }
      if (div3) {
        const { top } = div3.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        if (top < screenHeight / 4) {
          setCol3("teal");
        } else {
          setCol3("gray");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="overflow-x-hidden">
      <FloatingNav navItems={navItems} className="z-20" />
      <div
        className="h-[200rem] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-200
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="bg-black h-full w-full flex flex-col items-center justify-center overflow-y-hidden">
        <TextGenerateEffect
          words="Know More About My Tech Expertise"
          className="text-center text-[28px] text-lg sm:text-3xl lg:text-4xl mt-32 relative"
        />
        <TracingBeam className="px-6 my-4 h-full mt-2 pt-10">
          {/* <TypewriterEffectSmooth words={words} className='pl-10'/> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2  text-black dark:text-white pl-10 font-normal font-mono flex flex-row items-center space-x-4"
          >
            <Icon3dCubeSphere color={col1} />
            <div
              id="div1"
              className={
                `${col1 === "gray" ? "text-gray-200" : "text-green-600"}` +
                " sm:text-md"
              }
            >
              {" "}
              Hi there! I'm Abhishek Gupta, a recently promoted 3rd-year B.Tech
              Student in Computer Science at IIIT Naya Raipur.
              <br></br>My expertise lies in crafting intuitive and
              high‑performance web and mobile applications
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-2  text-black dark:text-white pl-10 font-normal font-mono flex flex-row items-center space-x-4"
          >
            <Icon3dCubeSphere color={col2} />
            <div
              id="div2"
              className={col2 === "gray" ? "text-gray-200" : "text-green-600"}
            >
              I began my journey by mastering data structures and algorithms,
              which provided a solid foundation for robust software design.
              <br></br>Currently, I'm immersed in full‑stack development,
              exploring modern frameworks and best practices.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-2 text-md text-black dark:text-white pl-10 font-normal font-mono flex flex-row items-center space-x-4"
          >
            <Icon3dCubeSphere color={col3} />
            <div
              id="div3"
              className={col3 === "gray" ? "text-gray-200" : "text-green-600"}
            >
              Alongside, I'm deeply passionate about competitive programming,
              constantly challenging myself to solve and optimize intricate
              problems.
              <br></br> Constantly challenging myself to solve complex DSA
              problems.{" "}
            </div>
          </motion.div>
          <h1 className="mx-auto max-w-5xl px-8 pb-2 pt-20 text-2xl font-bold text-teal-400 md:text-4xl font-sans pl-10">
            Technical Skills
          </h1>
          <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto pr-10 pl-20">
            <Card
              title="Next Js"
              icon={<IconBrandNextjs color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
            <Card
              title="React Js"
              icon={<IconBrandReact color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-purple-900"
                colors={[[226, 173, 242]]}
              />
            </Card>
            <Card
              title="MERN"
              icon={<IconBrandNodejs color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
          <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto pr-10 pl-20">
            <Card
              title="Django"
              icon={<IconBrandDjango color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
            <Card
              title="Flutter"
              icon={<IconBrandFlutter color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-purple-900"
                colors={[[226, 173, 242]]}
              />
            </Card>
            <Card
              title="Firebase"
              icon={<IconBrandFirebase color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
          <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto pr-10 pl-20">
            <Card
              title="MySQL"
              icon={<IconBrandMysql color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
            <Card
              title="Vercel"
              icon={<IconBrandVercel color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-purple-900"
                colors={[[226, 173, 242]]}
              />
            </Card>
            <Card
              title="MongoDB"
              icon={<IconBrandMongodb color="white" size={50} />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
          <h1 className="mx-auto max-w-5xl px-8 pb-1 pt-2 text-3xl font-bold text-sky-300 md:text-4xl font-sans pl-16">
            Recent Projects
          </h1>
          <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-4">
            {projects.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
                onClick={() => window.open(item.link)}
              >
                <PinContainer title={item.title} href={item.link} className="">
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0 w-full h-full object-cover"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <AuroraBackground className="w-fit h-fit p-0 m-0">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-[16rem] mx-auto p-4 relative h-[20rem] "
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className=" text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    </AuroraBackground>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default AboutMe;

const projects = [
  {
    id: 1,
    title: "AI-Personalized-Learning-Platform-with-integrity",
    des: "Unlock the future of education with an AI-powered personalized learning platform that adapts to individual needs while upholding academic integrity",
    img: "/bg_2.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vite.svg", "/cloud.svg"],
    link: "https://github.com/guptaabhishek2265/-AI-Personalized-Learning-Platform-with-integrity",
  },
  {
    id: 2,
    title: "Jungle Safari Souvenir Shop-Smart Inventory Management System ",
    des: "Explore the wild side of retail with this interactive real-time system designed to manage and optimize inventory for the Jungle Safari Souvenir Shop.",
    img: "/bg_1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vite.svg"],
    link: "https://github.com/guptaabhishek2265/Jungle-Safari-Souvenir-Shop",
  },
  {
    id: 3,
    title: "AI_Resume_Recommendation",
    des: "Unlock career potential with an AI-powered resume recommendation system that personalizes job applications while maintaining authenticity and relevance.",
    img: "/bg_3.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/dock.svg"],
    link: "https://github.com/guptaabhishek2265/-AI_Resume_Recommendation",
  },
];
