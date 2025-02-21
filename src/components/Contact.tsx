
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <footer className="py-20 px-4 bg-hackathon-purple/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-hackathon-blue mb-2">Email: contact@codeshastra.tech</p>
            <p className="text-hackathon-blue">Phone: +91 98765 43210</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-hackathon-yellow hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-hackathon-yellow hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-hackathon-yellow hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Organized by</h3>
            <p className="text-hackathon-blue">TechCider Club</p>
            <p className="text-hackathon-blue">Infinix Club</p>
            <p className="text-hackathon-blue">Manthan Club</p>
            <p className="text-hackathon-yellow mt-4">NMIMS Navi Mumbai</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-hackathon-purple/30 text-center"
        >
          <p className="text-hackathon-blue">© 2024 CodeShastra'25. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
