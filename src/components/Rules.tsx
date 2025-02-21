
import { motion } from "framer-motion";

const rules = [
  {
    title: "Team Formation",
    description: "Form teams of 2-4 members. Cross-college teams are allowed.",
    icon: "👥"
  },
  {
    title: "Code of Conduct",
    description: "Original work only. No pre-written code allowed. Be respectful to all participants.",
    icon: "⚖️"
  },
  {
    title: "Development",
    description: "24 hours of coding. Use any technology stack. Regular commits required.",
    icon: "💻"
  },
  {
    title: "Submissions",
    description: "Submit project with documentation and presentation before deadline.",
    icon: "🎯"
  },
  {
    title: "Judging Criteria",
    description: "Innovation, technical complexity, UI/UX, practicality, and presentation.",
    icon: "🏆"
  }
];

export const Rules = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-48 h-48 bg-hackathon-yellow/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-64 h-64 bg-hackathon-orange/20 rounded-full blur-3xl"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-16"
      >
        Rules & Guidelines
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rules.map((rule, index) => (
          <motion.div
            key={rule.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-hackathon-purple/40 to-hackathon-purple/20 backdrop-blur-sm p-6 rounded-xl pixel-corners border border-hackathon-yellow/20"
          >
            <div className="text-4xl mb-4">{rule.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
            <p className="text-hackathon-blue">{rule.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Floating Code Elements */}
      <motion.div
        animate={{ 
          x: [-20, 20, -20],
          y: [0, -20, 0],
          rotate: [0, 360, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-10 text-3xl text-hackathon-yellow/30 font-mono"
      >
        {"{ }"}
      </motion.div>
      <motion.div
        animate={{ 
          x: [20, -20, 20],
          y: [0, 20, 0],
          rotate: [360, 0, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-10 text-3xl text-hackathon-orange/30 font-mono"
      >
        {"</>"}
      </motion.div>
    </section>
  );
};
