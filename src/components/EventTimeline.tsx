"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Trophy } from "lucide-react"

const timelineEvents = [
  {
    time: "8th March, 10:00 AM",
    title: "Opening Ceremony",
    description: "Kickoff and team registration",
    icon: "🎉",
  },
  {
    time: "8th March, 11:00 AM",
    title: "Hackathon Begins",
    description: "Start your engines! Begin working on your projects",
    icon: "🚀",
  },
  {
    time: "8th March, 4:00 PM",
    title: "Mentorship Session",
    description: "One-on-one mentorship with industry experts",
    icon: "💡",
  },
  {
    time: "9th March, 10:00 AM",
    title: "Pre-Final Submissions",
    description: "Submit your project drafts for initial review",
    icon: "📝",
  },
  {
    time: "9th March, 11:00 AM",
    title: "Final Presentations",
    description: "Present your solutions to the judges",
    icon: "🎯",
  },
  {
    time: "9th March, 2:00 PM",
    title: "Closing Ceremony",
    description: "Winners announcement and prize distribution",
    icon: "🏆",
  },
]

const prizeDetails = [
  {
    position: "1st Prize",
    amount: "₹40,000",
    rewards: ["Premium Developer Kit", "1-Year Cloud Credits", "Direct Internship Interviews"],
    color: "from-yellow-300 via-yellow-200 to-yellow-400",
  },
  {
    position: "2nd Prize",
    amount: "₹25,000",
    rewards: ["Pro Developer Tools", "6-Month Cloud Credits", "Startup Mentorship"],
    color: "from-gray-300 via-gray-100 to-gray-400",
  },
  {
    position: "3rd Prize",
    amount: "₹15,000",
    rewards: ["Developer Toolkit", "3-Month Cloud Credits", "Technical Workshop Access"],
    color: "from-amber-700 via-amber-600 to-amber-800",
  },
]

export const EventTimeline = () => {
  const [isPrizeDetailsOpen, setIsPrizeDetailsOpen] = useState(false)

  return (
    <section className="py-10 sm:py-20 px-4 relative overflow-hidden">
      {/* Floating Islands - Hidden on small screens */}
      <motion.div
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="hidden sm:block absolute top-28 left-5 pixel-corners"
      >
        <div className="w-36 h-24 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="hidden sm:block absolute bottom-48 right-5 pixel-corners"
      >
        <div className="w-48 h-28 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
      </motion.div>

      {/* Pixel Art Clouds - Hidden on small screens */}
      <motion.div
        animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="hidden sm:block absolute top-40 right-10 w-24 h-12 bg-white/20 backdrop-blur-sm rounded-full"
      />
      <motion.div
        animate={{ x: [10, -10, 10], y: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="hidden sm:block absolute top-56 left-10 w-20 h-10 bg-white/20 backdrop-blur-sm rounded-full"
      />

      {/* Prize Pool Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-10 sm:mb-20 px-2 sm:px-4"
      >
        <motion.div
          whileHover={{ scale: isPrizeDetailsOpen ? 1 : 1.02 }}
          className="bg-gradient-to-r from-hackathon-orange via-hackathon-yellow to-hackathon-orange p-1 rounded-2xl pixel-corners relative overflow-hidden cursor-pointer"
          onClick={() => setIsPrizeDetailsOpen(!isPrizeDetailsOpen)}
        >
          {/* Animated Background */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 opacity-30"
          >
            <div className="w-full h-full bg-gradient-to-r from-hackathon-yellow/50 to-hackathon-orange/50" />
          </motion.div>

          <div className="bg-hackathon-purple/90 backdrop-blur-lg p-4 sm:p-8 rounded-2xl pixel-corners relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 text-center flex items-center justify-center gap-2 sm:gap-3">
              Prize Pool
              <motion.div
                animate={{ rotate: isPrizeDetailsOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-hackathon-yellow"
              >
                <Trophy size={24} className="sm:w-8 sm:h-8" />
              </motion.div>
            </h3>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r from-hackathon-yellow via-white to-hackathon-orange bg-clip-text text-transparent"
            >
              ₹80,000
            </motion.div>
            <div className="mt-2 sm:mt-4 text-center text-hackathon-blue text-sm sm:text-base">
              {isPrizeDetailsOpen ? "Click to collapse" : "Click to see prize breakdown! 🎁"}
            </div>

            {/* Prize Details */}
            <AnimatePresence>
              {isPrizeDetailsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 sm:mt-8 space-y-4 sm:space-y-6 overflow-hidden"
                >
                  {prizeDetails.map((prize, index) => (
                    <motion.div
                      key={prize.position}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-hackathon-purple/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm"
                    >
                      <div className={`bg-gradient-to-r ${prize.color} bg-clip-text text-transparent font-bold text-xl sm:text-2xl mb-1 sm:mb-2`}>
                        {prize.position}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{prize.amount}</div>
                      <ul className="space-y-1 sm:space-y-2">
                        {prize.rewards.map((reward, rewardIndex) => (
                          <motion.li
                            key={rewardIndex}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + rewardIndex * 0.1 }}
                            className="text-hackathon-blue text-sm sm:text-base flex items-center gap-2"
                          >
                            <span className="text-hackathon-yellow">•</span> {reward}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative Corner Elements */}
            <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-hackathon-yellow" />
            <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-hackathon-yellow" />
            <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-hackathon-yellow" />
            <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-hackathon-yellow" />
          </div>
        </motion.div>
      </motion.div>

      <div id="schedule" className="relative text-center mb-8 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white relative z-10"
        >
          Event Schedule
        </motion.h2>
        <motion.div
          animate={{
            x: [-2, 2, -2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 text-3xl sm:text-4xl font-bold text-hackathon-yellow/50 blur-sm"
        >
          Event Schedule
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative px-2 sm:px-4">
        {/* Timeline Line with Gradient Animation */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute left-4 sm:left-1/2 top-0 w-1 bg-gradient-to-b from-hackathon-yellow via-hackathon-orange to-transparent transform sm:-translate-x-1/2"
        />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-start mb-8 sm:mb-12 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } flex-row`}
          >
            <div className={`pl-12 sm:pl-0 ${
              index % 2 === 0 ? "sm:text-right sm:pr-8 sm:w-1/2" : "sm:text-left sm:pl-8 sm:w-1/2"
            } w-full`}>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block w-full sm:w-auto">
                <div className="bg-hackathon-purple/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl pixel-corners relative group">
                  {/* Animated Border on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-xl pixel-corners"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 200%"],
                    }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <div className="text-hackathon-yellow text-xs sm:text-sm mb-1 sm:mb-2">{event.time}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 flex items-center gap-2">
                    <span>{event.title}</span>
                    <motion.span
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="inline-block"
                    >
                      {event.icon}
                    </motion.span>
                  </h3>
                  <p className="text-hackathon-blue text-sm sm:text-base">{event.description}</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              className="absolute left-4 sm:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-hackathon-yellow rounded-full transform sm:-translate-x-1/2 cursor-pointer"
            >
              {/* Pulsing Effect */}
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-hackathon-yellow/30 rounded-full -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default EventTimeline