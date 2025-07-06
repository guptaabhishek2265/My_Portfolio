import { FloatingNav } from './ui/FloatingNavbar';
import { Button } from './ui/MovingBorders';

const Experience = () => {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
      ];
    const workExperience = [
    {
      id: 1,
      title: "Participated in  CodeClash – The Battle of Logic & Code",
      desc: "Participated in CodeClash – Showcasing logical thinking and coding skills in a competitive programming environment.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Participated in Many Hackathons",
      desc: "Collaboratively developed many website.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Software Engineering Job Simulation at Accenture",
      desc: "Gained hands-on experience in software engineering practices through Accenture's job simulation program, developing real-world problem-solving skills and industry best practices.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
   
  ];
  
  return (
    <div className="py-20 w-screen min-h-screen h-full bg-black">
        <FloatingNav navItems={navItems} className="z-20" />
        <h1 className="text-center md:text-3xl pt-12">
        My <span className="text-purple">work experience</span>
        </h1>
    <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-8">
      {workExperience.map((card) => (
        <Button
          key={card.id}
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img
              src={card.thumbnail}
              alt={card.thumbnail}
              className="lg:w-32 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {card.title}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {card.desc}
              </p>
            </div>
          </div>
        </Button>
      ))}
    </div>
  </div>

  )
}

export default Experience
