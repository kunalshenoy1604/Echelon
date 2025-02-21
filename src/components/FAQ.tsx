
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-16"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full text-left bg-hackathon-purple/30 backdrop-blur-sm p-6 rounded-xl pixel-corners"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-hackathon-yellow text-2xl"
                >
                  ↓
                </motion.span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 text-hackathon-blue"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
