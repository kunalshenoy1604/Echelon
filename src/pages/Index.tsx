
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CountdownTimer } from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-hackathon-purple overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-hackathon-orange/20 to-hackathon-purple/50" />
        
        {/* Floating Islands */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10"
        >
          <div className="w-32 h-32 bg-hackathon-green/20 rounded-lg backdrop-blur-sm" />
        </motion.div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-4"
          >
            CodeShastra'25
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-hackathon-yellow mb-8"
          >
            Flagship 24-hour STME Hackathon
          </motion.p>
          
          <div className="mb-12">
            <CountdownTimer />
          </div>
          
          <div className="flex justify-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-hackathon-orange text-white rounded-full font-medium"
            >
              Partner with us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-hackathon-yellow text-hackathon-purple rounded-full font-medium"
            >
              Grab your tickets now
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-white"
          >
            <p className="text-lg mb-2">Prize Pool: ₹75,000</p>
            <p className="text-sm text-hackathon-blue">
              Organized by: TechCider Club, Infinix Club, Manthan Club - NMIMS Navi Mumbai
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
