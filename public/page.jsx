"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import easeHealth from "./easeHealth.png"
import hospitality from "./Hospitality.png"
import nike from "./nike.png"
import github from "./github.png"

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "EaseHealth",
    desc: "Welcome to Ease Health, your trusted companion in proactive healthcare. Harnessing the power of cutting-edge machine learning, Ease Health offers a seamless platform where you can gain invaluable insights into your well-being within moments. Our meticulously crafted algorithms, trained on authorized datasets, deliver unparalleled accuracy in predicting three critical health conditions: diabetes, heart disease, and Parkinson's. Simply input your details, and let Ease Health guide you with precision, empowering you to take proactive steps towards a healthier tomorrow. Experience peace of mind and embrace a future of well-being with Ease Health – where health meets innovation.",
    img: easeHealth,
    link: "https://easehealth.streamlit.app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Hospitality Project",
    desc: "Explore a captivating online platform where wanderlust meets comfort, connecting travelers with enchanting stays curated for unforgettable experiences. Immerse yourself in a world of unique accommodations, each telling its own story, promising not just a place to rest but a canvas for unforgettable memories. Discover the essence of hospitality through our carefully curated collection of distinctive homes, ensuring your journey is as extraordinary as the destinations you explore.",
    img: hospitality,
    link: "https://hospitality-project-six.vercel.app",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Github",
    desc: "I would like to invite you to explore my GitHub repository, where you can find a diverse array of projects that highlight my technical expertise and passion for software development. In my GitHub portfolio, you will discover: Innovative Projects: Creative and practical solutions that demonstrate my problem-solving skills and ingenuity.Diverse Technologies: Proficiency across various programming languages, frameworks, and tools, showcasing my versatility.Collaborative Work: Examples of team projects that illustrate my ability to work effectively in collaborative environments.Continuous Learning: A commitment to staying current with the latest technologies and best practices in the industry.Please visit my GitHub repository to see firsthand the projects that I have poured my skills and enthusiasm into. I am confident that they will provide a deeper insight into my capabilities and potential. ",
    img: github,
    link: "https://github.com/LakshayRoodkee",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "UI/UX Designer",
    desc: "Created a sleek and intuitive sales webpage for Nike shoes, delivering the ultimate shopping experience. This project allows users to browse the latest collections, enjoy exclusive discounts, and find their perfect pair effortlessly with advanced search and filter options. The secure checkout and fast shipping features ensure a seamless purchase from start to finish. Elevate your style with Nike!",
    img: nike,
    link: "https://www.figma.com/community/file/1302146789929253565",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-[#333333]">
                  <h1 className="text-xl font-aeonik md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Data Analyst-Cloud-AI/ML-UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;