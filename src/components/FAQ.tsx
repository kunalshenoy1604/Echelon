"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const faqs = [
  {
    question: "What is CodeShastra'25?",
    answer:
      "CodeShastra'25 is NMIMS Navi Mumbai's flagship 24-hour hackathon where participants work on innovative solutions to real-world problems.",
    icon: "🚀",
  },
  {
    question: "Who can participate?",
    answer:
      "Students from any college pursuing technical or non-technical courses can participate in teams of 2-4 members.",
    icon: "👥",
  },
  {
    question: "What's the prize pool?",
    answer: "The total prize pool is ₹75,000, with exciting prizes for winners and special category awards.",
    icon: "💰",
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there is a nominal registration fee per team. Early bird discounts are available.",
    icon: "🎫",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and any other hardware you need for your project.",
    icon: "💻",
  },
]

const FloatingPixel = ({ delay = 0 }) => (
  <motion.div
    animate={{
      y: [-10, 10],
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
    className="w-2 h-2 bg-hackathon-yellow absolute"
  />
)

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            className="border border-hackathon-yellow/10"
          />
        ))}
      </div>

      {/* Floating Elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {["</>", "{}", "[]", "//", "&&"][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* Title with Glitch Effect */}
      <div id="faqs" className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white relative z-10"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          animate={{
            x: [-2, 2, -2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 text-4xl font-bold text-hackathon-yellow/50 blur-sm"
        >
          Frequently Asked Questions
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Animated Gradient Background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(255,184,0,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(255,184,0,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(255,184,0,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 rounded-3xl"
        />

        <div className="relative space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left relative group"
              >
                {/* Card Background with Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-hackathon-purple/30 to-hackathon-purple/20 backdrop-blur-sm rounded-xl pixel-corners border border-hackathon-yellow/20 overflow-hidden">
                  <motion.div
                    animate={{
                      x: ["0%", "100%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-hackathon-yellow/20 to-transparent skew-x-12"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={
                          hoveredIndex === index
                            ? {
                                rotate: [0, -10, 10, 0],
                                scale: [1, 1.2, 1.2, 1],
                              }
                            : {}
                        }
                        className="text-2xl"
                      >
                        {faq.icon}
                      </motion.span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-hackathon-yellow transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                        scale: hoveredIndex === index ? 1.2 : 1,
                      }}
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
                      >
                        <motion.p
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                          className="mt-4 text-hackathon-blue"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>

              {/* Particle Effects */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, -100],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute w-2 h-2 bg-hackathon-yellow rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

