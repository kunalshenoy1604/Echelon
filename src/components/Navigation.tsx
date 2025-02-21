import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", id: "home" },
  { title: "Schedule", id: "schedule" },
  { title: "Rules", id: "rules" },
  { title: "FAQs", id: "faqs" },
  { title: "Contact Us", id: "contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Desktop Navigation - Centered */}
        <ul className="hidden md:flex justify-center space-x-8 bg-hackathon-purple/30 backdrop-blur-md px-8 py-4 rounded-full">
          {navItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-hackathon-yellow transition-colors focus:outline-none"
              >
                {item.title}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white absolute right-6 top-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col items-center space-y-6 bg-hackathon-purple/30 backdrop-blur-md p-6 rounded-lg mt-4"
          >
            {navItems.map((item) => (
              <motion.li key={item.id} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-hackathon-yellow transition-colors focus:outline-none"
                >
                  {item.title}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
