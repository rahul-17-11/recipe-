import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';


const CheifOnWork = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full flex justify-center items-center z-0">
        <motion.div
          className="absolute right-0"
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
        >
          <img src="/ProChief.png" alt="Chef" className="max-w-[200px] md:max-w-[300px]" />
        </motion.div>
        <motion.div
          className="absolute left-0"
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
        >
          <img
            src="/recipeIngredients.png"
            alt="Ingredients"
            className="max-w-[150px] md:max-w-[250px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CheifOnWork;