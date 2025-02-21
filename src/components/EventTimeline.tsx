"use client"

import { motion } from "framer-motion"

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

export const EventTimeline = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Floating Islands */}
      <motion.div
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-28 left-5 pixel-corners"
      >
        <div className="w-36 h-24 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-48 right-5 pixel-corners"
      >
        <div className="w-48 h-28 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
      </motion.div>

      {/* Pixel Art Clouds */}
      <motion.div
        animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-40 right-10 w-24 h-12 bg-white/20 backdrop-blur-sm rounded-full"
      />
      <motion.div
        animate={{ x: [10, -10, 10], y: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-56 left-10 w-20 h-10 bg-white/20 backdrop-blur-sm rounded-full"
      />

      {/* Prize Pool Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="bg-gradient-to-r from-hackathon-orange via-hackathon-yellow to-hackathon-orange p-1 rounded-2xl pixel-corners relative overflow-hidden">
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

          <div className="bg-hackathon-purple/90 backdrop-blur-lg p-8 rounded-2xl pixel-corners relative">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Prize Pool</h3>
            <motion.div
              transition={{
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                rotateY: { duration: 5, repeat: Number.POSITIVE_INFINITY },
              }}
              className="text-6xl font-bold text-center bg-gradient-to-r from-hackathon-yellow via-white to-hackathon-orange bg-clip-text text-transparent"
            >
              ₹75,000
            </motion.div>
            <div className="mt-4 text-center text-hackathon-blue">Get ready to win exciting prizes and goodies! 🎁</div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-hackathon-yellow" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-hackathon-yellow" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-hackathon-yellow" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-hackathon-yellow" />
          </div>
        </div>
      </motion.div>

      <div id="schedule" className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white relative z-10"
        >
          Event Schedule
        </motion.h2>
        <motion.div
          animate={{
            x: [-2, 2, -2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 text-4xl font-bold text-hackathon-yellow/50 blur-sm"
        >
          Event Schedule
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line with Gradient Animation */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-hackathon-yellow via-hackathon-orange to-transparent transform -translate-x-1/2"
        />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} md:items-start group`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <div className="bg-hackathon-purple/30 backdrop-blur-sm p-6 rounded-xl pixel-corners relative group">
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

                  <div className="text-hackathon-yellow text-sm mb-2">{event.time}</div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <span>{event.title}</span>
                    <motion.span
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="inline-block"
                    >
                      {event.icon}
                    </motion.span>
                  </h3>
                  <p className="text-hackathon-blue">{event.description}</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              className="absolute left-1/2 w-4 h-4 bg-hackathon-yellow rounded-full transform -translate-x-1/2 cursor-pointer"
            >
              {/* Pulsing Effect */}
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute w-8 h-8 bg-hackathon-yellow/30 rounded-full -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

