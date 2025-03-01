"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Trophy, Clock, Calendar } from "lucide-react"

// Define types for our data
type TimelineEvent = {
  time: string
  title: string
  description: string
  icon: string
  date?: string
}

type PrizeDetail = {
  position: string
  amount?: string
  rewards: string[]
  color: string
}

// Data
const timelineEvents: TimelineEvent[] = [
  {
    time: "9:00 AM",
    date: "8th March",
    title: "Opening Ceremony",
    description: "Kickoff and team registration",
    icon: "🎉",
  },
  {
    time: "10:30 AM",
    date: "8th March",
    title: "Hackathon Begins",
    description: "Start your engines! Begin working on your projects",
    icon: "🚀",
  },
  {
    time: "4:00 PM",
    date: "8th March",
    title: "Mentorship Session",
    description: "One-on-one mentorship with industry experts",
    icon: "💡",
  },
  {
    time: "6:00 PM",
    date: "8th March",
    title: "Vibe Coding Begins",
    description: "Chill and code with your team",
    icon: "🎧",
  },
  {
    time: "9:00 PM",
    date: "8th March",
    title: "Dinner Break!",
    description: "Enjoy the amazing food we would serve you and take a break",
    icon: "🍕",
  },
  {
    time: "10:00 AM",
    date: "9th March",
    title: "Pre-Final Submissions",
    description: "Submit your project drafts for initial review",
    icon: "📝",
  },
  {
    time: "11:00 AM",
    date: "9th March",
    title: "Final Presentations",
    description: "Present your solutions to the judges",
    icon: "🎯",
  },
  {
    time: "2:00 PM",
    date: "9th March",
    title: "Closing Ceremony",
    description: "Winners announcement and prize distribution",
    icon: "🏆",
  },
]

const prizeDetails: PrizeDetail[] = [
  {
    position: "1st Prize",
    amount: "₹40,000",
    rewards: ["25K in-cash", "Internship", "Exciting Goodies", "Certificates","Total In-Kind (15K)"],
    color: "from-yellow-300 via-yellow-200 to-yellow-400",
  },
  {
    position: "2nd Prize",
    amount: "₹25,000",
    rewards: ["10K in-cash", "Internship", "Exciting Goodies", "Certificates","Total In-Kind (15K)"],
    color: "from-gray-300 via-gray-100 to-gray-400",
  },
  {
    position: "3rd Prize",
    amount: "₹15,000",
    rewards: ["5K in-cash","Internship", "Exciting Goodies", "Certificates","Total In-Kind (10K)"],
    color: "from-amber-700 via-amber-600 to-amber-800",
  },
]

// Utility function to conditionally join class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

export const EventTimeline = () => {
  const [isPrizeDetailsOpen, setIsPrizeDetailsOpen] = useState(false)
  const [activeDay, setActiveDay] = useState<string>("8th March")
  const [isIntersecting, setIsIntersecting] = useState<boolean[]>(Array(timelineEvents.length).fill(false))
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([])

  // Filter events by active day
  const filteredEvents = timelineEvents.filter((event) => event.date === activeDay)

  // Get unique days for the tabs
  const uniqueDays = Array.from(new Set(timelineEvents.map((event) => event.date))).filter(Boolean) as string[]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = timelineRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setIsIntersecting((prev) => {
              const newState = [...prev]
              newState[index] = entry.isIntersecting
              return newState
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="py-10 sm:py-20 px-4 relative overflow-hidden bg-hackathon-purple">
      {/* Floating Islands */}
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

      {/* Pixel Art Clouds */}
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
                  className="mt-4 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 overflow-hidden"
                >
                  {prizeDetails.map((prize, index) => (
                    <motion.div
                      key={prize.position}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        "bg-hackathon-purple/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm pixel-corners",
                        index === 0 ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3",
                      )}
                    >
                      <div
                        className={`bg-gradient-to-r ${prize.color} bg-clip-text text-transparent font-bold text-xl sm:text-2xl mb-1 sm:mb-2`}
                      >
                        {prize.position}
                      </div>
                      {prize.amount && (
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{prize.amount}</div>
                      )}
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

      {/* Day tabs for mobile */}
      <div className="flex justify-center mb-8 md:hidden">
        <div className="inline-flex bg-hackathon-purple/70 backdrop-blur-md p-1 rounded-full pixel-corners">
          {uniqueDays.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                activeDay === day
                  ? "bg-gradient-to-r from-hackathon-orange to-hackathon-yellow text-hackathon-purple"
                  : "text-white hover:text-hackathon-yellow",
              )}
            >
              {day}
            </button>
          ))}
        </div>
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

        {/* Desktop view shows all events */}
        <div className="hidden sm:block">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={`${event.date}-${event.time}`}
                ref={(el) => (timelineRefs.current[index] = el)}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-8 sm:mb-12 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                } flex-row`}
              >
                <div
                  className={`pl-12 sm:pl-0 ${
                    isEven ? "sm:text-right sm:pr-8 sm:w-1/2" : "sm:text-left sm:pl-8 sm:w-1/2"
                  } w-full`}
                >
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

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-hackathon-yellow text-xs sm:text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-hackathon-blue/30"></div>
                        <div className="flex items-center gap-1.5 text-hackathon-yellow text-xs sm:text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>

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
            )
          })}
        </div>

        {/* Mobile view shows filtered events by day */}
        <div className="sm:hidden">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={`mobile-${event.time}-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex mb-8 pl-12"
            >
              {/* Timeline node */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-4 w-3 h-3 bg-hackathon-yellow rounded-full transform -translate-x-1/2 z-10"
              >
                {/* Pulsing effect */}
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-hackathon-yellow rounded-full"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="w-full">
                <div className="bg-hackathon-purple/30 backdrop-blur-sm p-4 rounded-xl pixel-corners relative">
                  <div className="text-hackathon-yellow text-xs mb-1">{event.time}</div>

                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    <span>{event.title}</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                      className="inline-block"
                    >
                      {event.icon}
                    </motion.span>
                  </h3>

                  <p className="text-hackathon-blue text-sm">{event.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
      </motion.div>
    </section>
  )
}

export default EventTimeline

