
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
    <section className="py-20 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-16"
      >
        Event Schedule
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative flex items-center mb-12 group"
          >
            <div className="w-32 text-hackathon-yellow text-sm">{event.time}</div>
            <div className="flex-1 bg-hackathon-purple/30 backdrop-blur-sm p-6 rounded-xl pixel-corners">
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-hackathon-blue">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
