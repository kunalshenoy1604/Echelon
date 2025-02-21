
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is CodeShastra'25?",
    answer: "CodeShastra'25 is NMIMS Navi Mumbai's flagship 24-hour hackathon where participants work on innovative solutions to real-world problems."
  },
  {
    question: "Who can participate?",
    answer: "Students from any college pursuing technical or non-technical courses can participate in teams of 2-4 members."
  },
  {
    question: "What's the prize pool?",
    answer: "The total prize pool is ₹75,000, with exciting prizes for winners and special category awards."
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there is a nominal registration fee per team. Early bird discounts are available."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and any other hardware you need for your project."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Floating Code Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 text-4xl text-hackathon-yellow font-mono"
      >
        {"</>"}
      </motion.div>
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          rotate: [360, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 text-4xl text-hackathon-orange font-mono"
      >
        {"{ }"}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-16"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-hackathon-purple/50 to-transparent rounded-3xl filter blur-3xl" />
        
        <div className="relative">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left bg-gradient-to-r from-hackathon-purple/30 to-hackathon-purple/20 backdrop-blur-sm p-6 rounded-xl pixel-corners border border-hackathon-yellow/20"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="text-hackathon-yellow w-6 h-6"
                  >
                    ↓
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-hackathon-blue">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
