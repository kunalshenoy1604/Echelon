import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EventTimeline } from "@/components/EventTimeline";
import { Rules } from "@/components/Rules";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Map } from "@/components/Map";
import { WhyParticipate } from "@/components/WhyParticipate";
import { Sponsors } from "@/components/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen bg-hackathon-purple overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 text-center">
        {/* Background Elements */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[90vw] max-h-[800px] rounded-full bg-gradient-to-b from-hackathon-yellow via-hackathon-orange to-transparent opacity-90" />
        
        {/* Pixel Art Clouds */}
        <motion.div
          animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 sm:top-32 right-4 sm:right-48 w-16 sm:w-48 h-8 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full"
        />
        <motion.div
          animate={{ x: [10, -10, 10], y: [5, -5, 5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-56 sm:top-48 left-4 sm:left-48 w-14 sm:w-32 h-6 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full"
        />

        {/* Floating Islands */}
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 sm:top-20 left-2 sm:left-10 pixel-corners"
        >
          <div className="w-28 sm:w-48 h-20 sm:h-32 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 sm:bottom-40 right-2 sm:right-10 pixel-corners"
        >
          <div className="w-36 sm:w-64 h-20 sm:h-40 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
        </motion.div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center mt-12 sm:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-7xl font-bold text-white mb-4"
          >
            Echelon'25
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-2xl text-hackathon-yellow mb-6 sm:mb-10"
          >
            STME's Flagship Blockbuster 24-hour Hackathon
          </motion.p>
          
          <div className="mb-10 sm:mb-16">
            <CountdownTimer />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 w-full max-w-[100%]">
        <a
          href="https://unstop.com/p/echelon25-stme-flagship-24-hour-hackathon-nmims-navi-mumbai-1413945?lb=csxoIl5&utm_medium=Share&utm_source=shortUrl" // Replace with your actual Google Forms link
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-hackathon-yellow to-hackathon-orange text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow pixel-corners w-full sm:w-auto"
          >
            Participate Now
          </motion.button>
          </a>
        </div>

        </div>
      </section>

      {/* Other Sections */}
      <EventTimeline />
      <WhyParticipate />
      <Rules />
      <Sponsors />
      <FAQ />
      <Map />
      <Contact />
    </div>
  );
};

export default Index;