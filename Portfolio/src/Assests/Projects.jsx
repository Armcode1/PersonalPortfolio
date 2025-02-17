import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const webDevelopmentProjects = [
  {
    title: "Personal Portfolio",
    description: "A responsive personal portfolio built with React.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Armcode1/PersonalPortfolio"
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with authentication and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Armcode1/-react-product-catalog"
  },
  {
    title: "English Academy Website",
    description: "A professional website for an English language institute, showcasing courses, faculty, student testimonials, and contact information.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://armcode1.github.io/English_Academy/"
},
{
  title: "AI Trip Planner",
  description: "Designed and developed an AI-driven travel itinerary generator using React.js, Node.js, MongoDB, OpenAI API, and Google Maps API.",
  tech: ["React", "Tailwind", "Node.js","Express","MongoDB","APIs"],
  link: "https://github.com/Armcode1/Codsoft/tree/main/CodSoft/1_Landing%20page"  
},
{
  title: "Tourism Landing Page",
  description: "A visually appealing landing page for a tourism business, showcasing travel destinations, tour packages, customer testimonials, and a booking inquiry form.",
  tech: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/Armcode1/Codsoft/tree/main/CodSoft/1_Landing%20page"  
}


];

const dataAnalysisProjects = [
  {
    title: "Sales Customer Insight",
    description: " A Sql-based anlysis providing insight and analyzing sales trends.",
    tech: ["Power BI", "Excel", "SQL"],
    link: "https://github.com/Armcode1/Sales-and-Customer-Insights-Analysis"
  },
  {
    title: "Ecommerce Sales Dashboard",
    description: "An interactive Power BI dashboard for analyzing e-commerce sales, tracking revenue trends, product performance, and customer insights.",
    tech: ["Power BI", "Excel", "SQL"],
    link: "#"
  },
  {
    title: "Music Store Insight Analysis",
    description: "A SQL-based analysis providing insights into a music store’s sales, customer behavior, popular genres, and revenue trends.",
    tech: ["SQL","Excel"],
    link: "https://github.com/Armcode1/Music_store_insights_analysis"
  },
];

const Projects = () => {
  const [currentIndexWeb, setCurrentIndexWeb] = useState(0);
  const [currentIndexData, setCurrentIndexData] = useState(0);

  useEffect(() => {
    const intervalWeb = setInterval(() => {
      setCurrentIndexWeb((prevIndex) => (prevIndex + 1) % webDevelopmentProjects.length);
    }, 3000);

    const intervalData = setInterval(() => {
      setCurrentIndexData((prevIndex) => (prevIndex + 1) % dataAnalysisProjects.length);
    }, 3500);

    return () => {
      clearInterval(intervalWeb);
      clearInterval(intervalData);
    };
  }, []);

  return (
    <section className="py-10 bg-[#0c1a25]" id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-6">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start">
          <div>
            <h3 className="text-[#00f0ff] text-2xl font-semibold mb-4">Web Development Projects</h3>
            <motion.div
              key={currentIndexWeb}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-[#112233] shadow-lg hover:shadow-xl rounded-lg w-80 mx-auto"
            >
              <div className="p-5">
                <h3 className="text-white text-xl font-semibold mb-2">{webDevelopmentProjects[currentIndexWeb].title}</h3>
                <p className="text-gray-400 mb-3">{webDevelopmentProjects[currentIndexWeb].description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {webDevelopmentProjects[currentIndexWeb].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-2 py-1 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={webDevelopmentProjects[currentIndexWeb].link}
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-[#00f0ff] text-2xl font-semibold mb-4">Data Analysis Projects</h3>
            <motion.div
              key={currentIndexData}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-[#112233]  shadow-lg hover:shadow-xl rounded-lg w-80 mx-auto"
            >
              <div className="p-5">
                <h3 className="text-white text-xl font-semibold mb-2">{dataAnalysisProjects[currentIndexData].title}</h3>
                <p className="text-gray-400 mb-3">{dataAnalysisProjects[currentIndexData].description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {dataAnalysisProjects[currentIndexData].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-2 py-1 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={dataAnalysisProjects[currentIndexData].link}
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;