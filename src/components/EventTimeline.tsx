
import { motion } from "framer-motion";

const timelineEvents = [
  {
    time: "8th March, 10:00 AM",
    title: "Opening Ceremony",
    description: "Kickoff and team registration"
  },
  {
    time: "8th March, 11:00 AM",
    title: "Hackathon Begins",
    description: "Start your engines! Begin working on your projects"
  },
  {
    time: "8th March, 4:00 PM",
    title: "Mentorship Session",
    description: "One-on-one mentorship with industry experts"
  },
  {
    time: "9th March, 10:00 AM",
    title: "Pre-Final Submissions",
    description: "Submit your project drafts for initial review"
  },
  {
    time: "9th March, 11:00 AM",
    title: "Final Presentations",
    description: "Present your solutions to the judges"
  },
  {
    time: "9th March, 2:00 PM",
    title: "Closing Ceremony",
    description: "Winners announcement and prize distribution"
  }
];

export const EventTimeline = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Decorative Background Elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-0 opacity-30"
      >
        <div className="w-32 h-20 bg-gradient-to-r from-hackathon-yellow to-hackathon-orange transform rotate-45" />
      </motion.div>
      
      {/* Animated Auto-Rickshaw */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ 
          x: [window.innerWidth + 100, -100],
          y: [0, -10, 0]
        }}
        transition={{ 
          x: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 left-0 z-10"
      >
        <div className="w-16 h-12 bg-hackathon-yellow pixel-corners relative">
          {/* Rickshaw Body */}
          <div className="absolute bottom-0 right-0 w-10 h-8 bg-hackathon-orange pixel-corners" />
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-hackathon-purple rounded-full" />
          <div className="absolute bottom-1 right-2 w-2 h-2 bg-hackathon-purple rounded-full" />
        </div>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-16"
      >
        Event Schedule
      </motion.h2>

      {/* Prize Pool Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="bg-gradient-to-r from-hackathon-orange via-hackathon-yellow to-hackathon-orange p-1 rounded-2xl pixel-corners">
          <div className="bg-hackathon-purple/90 backdrop-blur-lg p-8 rounded-2xl pixel-corners">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Prize Pool</h3>
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl font-bold text-center bg-gradient-to-r from-hackathon-yellow via-white to-hackathon-orange bg-clip-text text-transparent"
            >
              ₹75,000
            </motion.div>
            <div className="mt-4 text-center text-hackathon-blue">
              Get ready to win exciting prizes and goodies!
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-hackathon-yellow via-hackathon-orange to-transparent transform -translate-x-1/2" />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:items-start group`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <div className="bg-hackathon-purple/30 backdrop-blur-sm p-6 rounded-xl pixel-corners">
                  <div className="text-hackathon-yellow text-sm mb-2">{event.time}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-hackathon-blue">{event.description}</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 w-4 h-4 bg-hackathon-yellow rounded-full transform -translate-x-1/2"
            >
              <div className="absolute w-8 h-8 bg-hackathon-yellow/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
