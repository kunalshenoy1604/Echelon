"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

const rules = [
  {
    title: "Team Formation",
    description: "Form teams of 2-4 members. Cross-college teams are not allowed.",
    icon: "👥",
    color: "from-[#FF6B6B] to-[#FF8E8E]",
  },
  {
    title: "Code of Conduct",
    description: "Original work only. No pre-written code allowed. Be respectful to all participants.",
    icon: "⚖️",
    color: "from-[#4ECDC4] to-[#45B7AF]",
  },
  {
    title: "Development",
    description: "24 hours of coding. Use any technology stack. Regular commits required.",
    icon: "💻",
    color: "from-[#FFD93D] to-[#F6C90E]",
  },
  {
    title: "Submissions",
    description: "Submit project with documentation and presentation before deadline.",
    icon: "🎯",
    color: "from-[#6C5CE7] to-[#A8A4E9]",
  },
  {
    title: "Judging Criteria",
    description: "Innovation, technical complexity, UI/UX, practicality, and presentation.",
    icon: "🏆",
    color: "from-[#FF8F5E] to-[#FF7235]",
  },
  {
    title: "Team Work",
    description: "Equal contribution from all team members is mandatory.",
    icon: "🫂",
    color: "from-[#FF6B6B] to-[#FF8E8E]",
  },
]

const FloatingElement = ({ children, className = "" }) => (
  <motion.div
    animate={{
      y: [-10, 10],
      rotate: [-5, 5],
    }}
    transition={{
      duration: Math.random() * 2 + 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const Rules = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 0.9, 1.1, 1],
      transition: { duration: 0.5 },
    })
  }, [controls])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            className="border border-hackathon-yellow/10"
          />
        ))}
      </div>

      {/* Floating Game Elements */}
      <FloatingElement className="absolute top-20 right-10">
        <div className="w-16 h-16 bg-gradient-to-r from-hackathon-yellow to-hackathon-orange opacity-20 pixel-corners" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-10">
        <div className="w-20 h-20 bg-gradient-to-r from-hackathon-orange to-hackathon-yellow opacity-20 pixel-corners rotate-45" />
      </FloatingElement>

      {/* Title with Glitch Effect */}
      <div id="rules" className="text-center mb-16 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white relative z-10"
        >
          Rules & Guidelines
        </motion.h2>
        <motion.div
          animate={{
            x: [-2, 2, -2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 text-4xl font-bold text-hackathon-yellow/50 blur-sm"
        >
          Rules & Guidelines
        </motion.div>
      </div>

      {/* Rules Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {rules.map((rule, index) => (
          <motion.div
            key={rule.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
            }}
            className="group relative"
          >
            {/* Card Background with Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${rule.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl`}
            />

            {/* Main Card */}
            <div className="bg-gradient-to-br from-hackathon-purple/40 to-hackathon-purple/20 backdrop-blur-sm p-8 rounded-xl pixel-corners border border-hackathon-yellow/20 relative overflow-hidden h-full">
              {/* Animated Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hackathon-yellow/30 group-hover:border-hackathon-yellow transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hackathon-yellow/30 group-hover:border-hackathon-yellow transition-colors duration-300" />

              {/* Icon with Animation */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
              >
                {rule.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-hackathon-yellow transition-colors duration-300">
                {rule.title}
              </h3>
              <p className="text-hackathon-blue group-hover:text-white transition-colors duration-300">
                {rule.description}
              </p>

              {/* Hover Effect Particles */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none"
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40],
                      x: [0, Math.random() * 40 - 20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                    className={`absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${rule.color}`}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Code Symbols with Glow Effect */}
      {["{ }", "</>", "[]", "//", "&&"].map((symbol, index) => (
        <motion.div
          key={index}
          animate={{
            x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
            y: [Math.random() * 20 - 10, Math.random() * 20 - 10],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className={`absolute text-3xl font-mono
            ${index % 2 === 0 ? "text-hackathon-yellow" : "text-hackathon-orange"}
            opacity-30`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            filter: "blur(1px)",
            textShadow: "0 0 10px currentColor",
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Interactive Background Pulse */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 2],
          opacity: [0.1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-hackathon-yellow rounded-full blur-3xl"
      />
    </section>
  )
}

