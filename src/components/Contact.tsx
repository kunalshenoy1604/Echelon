import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <footer id="contact" className="py-16 px-6 bg-hackathon-purple/80 backdrop-blur-md relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl font-extrabold text-white mb-4">Get in Touch</h3>
          <p className="text-hackathon-yellow/90 mb-2">Deepali Koirala - +91 9167226904</p>
          <p className="text-hackathon-yellow/90 mb-2">Rishika Singh- +91 9321038001</p>
          <p className="text-hackathon-yellow/90 mb-2">Kunal Shenoy - +91 8452996098</p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-extrabold text-white mb-4">Connect with Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-hackathon-yellow hover:text-white transition duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-hackathon-yellow hover:text-white transition duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-hackathon-yellow hover:text-white transition duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Organized By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >
          <h3 className="text-3xl font-extrabold text-white mb-4">Organized By</h3>
          <p className="text-hackathon-blue/90">TechCider Club</p>
          <p className="text-hackathon-blue/90">Infinix Club</p>
          <p className="text-hackathon-blue/90">Manthan Club</p>
          <p className="text-hackathon-yellow/90">Student Council, STME</p>
          <p className="text-hackathon-yellow mt-4 font-bold">NMIMS Navi Mumbai</p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-hackathon-purple/40 text-center"
      >
        <p className="text-hackathon-yellow/90">Made with ❤️ by Kunal Shenoy</p>
        <p className="text-hackathon-blue/90">© 2024 CodeShastra'25. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};
