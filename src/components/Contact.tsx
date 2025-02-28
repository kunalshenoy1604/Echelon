import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const clubs = [
    {
      name: "STME Student Council",
      logo: "stuco.png"
    },
    {
      name: "TechCider Club",
      logo: "techcider.png"
    },
    {
      name: "Infinix Club",
      logo: "infinix.png",
    },
    {
      name: "Manthan Club",
      logo: "/manthan.png",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer id="contact" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-purple via-hackathon-purple/95 to-hackathon-purple" />
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,#ffffff33_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-32 h-32 bg-hackathon-yellow/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-48 h-48 bg-hackathon-orange/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Organizers Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Organized By</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clubs.map((club) => (
              <motion.div
                key={club.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-hackathon-yellow/20 to-hackathon-orange/20 rounded-xl transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-300" />
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-hackathon-yellow/50 transition-colors duration-300">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img
                      src={club.logo}
                      alt={`${club.name} logo`}
                      className="max-h-full max-w-full object-contain filter invert-0"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-1">{club.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-hackathon-yellow/90">
                <Phone className="w-5 h-5" />
                <div>
                  <p>Deepali Koirala - +91 9167226904</p>
                  <p>Rishika Singh - +91 9321038001</p>
                  <p>Kunal Shenoy - +91 8452996098</p>
                  <p>Haripriya Saraf - +91 9324443145</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-hackathon-yellow/90">
                <MapPin className="w-5 h-5" />
                <p>NMIMS Navi Mumbai</p>
              </div>
              <div className="flex items-center space-x-3 text-hackathon-yellow/90">
                <Mail className="w-5 h-5" />
                <p>stuco.stme@nmims.edu.in </p>
              </div>
              
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/stme.nmimsnavimumbai?igsh=MXkwczR4cXloaHdxbA=="
                className="w-12 h-12 rounded-lg bg-hackathon-yellow/10 flex items-center justify-center text-hackathon-yellow hover:bg-hackathon-yellow hover:text-white transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/company/stme-nmims-navi-mumbai/posts/?feedView=all"
                className="w-12 h-12 rounded-lg bg-hackathon-yellow/10 flex items-center justify-center text-hackathon-yellow hover:bg-hackathon-yellow hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="text-hackathon-yellow/90 hover:text-hackathon-yellow transition-colors duration-300">Home</a>
              <a href="#schedule" className="text-hackathon-yellow/90 hover:text-hackathon-yellow transition-colors duration-300">Timeline</a>
              <a href="#rules" className="text-hackathon-yellow/90 hover:text-hackathon-yellow transition-colors duration-300">Rules</a>
              <a href="#sponsors" className="text-hackathon-yellow/90 hover:text-hackathon-yellow transition-colors duration-300">Sponsors</a>
              <a href="#faqs" className="text-hackathon-yellow/90 hover:text-hackathon-yellow transition-colors duration-300">FAQ</a>
              <a href="#contact" className="text-hackathon-yellow/90 hover:text-hackathon-yellow transition-colors duration-300">Contact</a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-2 pt-8 border-t border-hackathon-yellow/20"
        >
          <p className="text-hackathon-yellow/90">
            Made with{" "}
            <span className="text-red-500">❤️</span>
            {" "}by Kunal Shenoy
          </p>
          <p className="text-hackathon-yellow/70">
            © 2024 Echelon'25. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};