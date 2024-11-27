import image from "/public/image1.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center w-full min-h-screen px-16 py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-light text-transparent bg-gradient-to-r from-blue-500 md:text-6xl to-pink-500 bg-clip-text">
            Abdelouahid Essarti
          </h1>
          <h3 className="text-2xl text-transparent bg-gradient-to-r from-pink-500 md:text-3xl to-blue-500 bg-clip-text">
            Wed Developer
          </h3>
          <p className="text-sm text-gray-400 md:text-base text-pretty">
            Ik ben een gepassioneerde en gedreven Web Developer uit Hasselt. Met
            een sterke focus op zowel front-end als back-end development, heb ik
            expertise opgebouwd in meerdere web technologieën. Wat mij
            onderscheidt, is mijn nieuwsgierigheid en drive om altijd te blijven
            leren. Ik streef ernaar om met mijn werk een verschil te maken en
            elke uitdaging met een frisse en doelgerichte aanpak aan te pakken.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
