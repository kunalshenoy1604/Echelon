
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Speakers", path: "/speakers" },
  { title: "Programming", path: "/programming" },
  { title: "Job Fair", path: "/job-fair" },
  { title: "PitchFest", path: "/pitchfest" },
  { title: "Highlights", path: "/highlights" },
  { title: "Partner with us", path: "/partner" },
];

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-center space-x-8 bg-hackathon-purple/30 backdrop-blur-md px-8 py-4 rounded-full">
          {navItems.map((item) => (
            <motion.li
              key={item.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className="text-white hover:text-hackathon-yellow transition-colors"
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
