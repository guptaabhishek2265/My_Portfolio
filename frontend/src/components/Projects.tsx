import { BackgroundBeams } from "./ui/background-beams";
import { HeroParallax } from "./ui/hero-parallax";
import { TypewriterEffectSmooth } from "./ui/typewriter";
import { FloatingNav } from "./ui/FloatingNavbar";

export const Projects = () => {
  const words = [
    {
      text: "Welcome ",
      className: "text-blue-200 dark:text-blue-200 text-2xl",
    },
    {
      text: "to ",
      className: "text-blue-200 dark:text-blue-200 text-2xl",
    },
    {
      text: "My ",
      className: "text-blue-200 dark:text-blue-200 text-2xl",
    },
    {
      text: "Projects",
      className: "text-blue-500 dark:text-blue-500 text-4xl",
    },
    {
      text: "Section.",
      className: "text-blue-500 dark:text-blue-500 text-4xl",
    },
  ];
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="h-[190rem] bg-black flex flex-col w-full overflow-x-hidden">
      <FloatingNav navItems={navItems} className="z-20" />
      <div className="h-40 w-screen item-center justify-center flex flex-row overflow-x-hidden mt-32">
        <TypewriterEffectSmooth words={words} className='items-center'/>
      </div>
      <div>
        <HeroParallax products={projects}/>
      </div>

      <BackgroundBeams className="h-[190rem] -z-10"/>
    </div>
  )
}


export const projects = [
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "/bg_2.webp",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "/bg_1.jpg",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "/bg_3.webp",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "/bg_4.png",
  },
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "/bg_2.webp",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "/bg_1.jpg",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "/bg_3.webp",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "/bg_4.png",
  },
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "/bg_2.webp",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "/bg_1.jpg",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "/bg_3.webp",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "/bg_4.png",
  },
  {
    title: "Code Sync Hub",
    link: "https://github.com/TheJayas/CodeSyncHub",
    thumbnail:
      "/bg_2.webp",
  },
  {
    title: "Journey Aura",
    link: "https://github.com/TheJayas/JourneyAura",
    thumbnail:
      "/bg_1.jpg",
  },
  {
    title: "Note Corner",
    link: "https://github.com/TheJayas/Note-Corner",
    thumbnail:
      "/bg_3.webp",
  },
 
  {
    title: "Club Catalyst",
    link: "https://github.com/TheJayas/chocholate_problem",
    thumbnail:
      "/bg_4.png",
  },
];