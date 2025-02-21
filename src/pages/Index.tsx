
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CountdownTimer } from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-hackathon-purple overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Gradient Sun */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-hackathon-yellow via-hackathon-orange to-transparent opacity-90" />
        
        {/* Pixel Art Clouds */}
        <motion.div
          animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-48"
        >
          <div className="w-48 h-24 bg-white/20 backdrop-blur-sm rounded-full" />
        </motion.div>
        <motion.div
          animate={{ x: [10, -10, 10], y: [5, -5, 5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 left-48"
        >
          <div className="w-32 h-16 bg-white/20 backdrop-blur-sm rounded-full" />
        </motion.div>

        {/* Floating Islands */}
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 pixel-corners"
        >
          <div className="w-48 h-32 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-10 pixel-corners"
        >
          <div className="w-64 h-40 bg-gradient-to-b from-hackathon-green/80 to-hackathon-green/40 backdrop-blur-sm" />
        </motion.div>

        {/* Bridge Silhouette */}
        <div className="absolute bottom-0 w-full h-64 bg-[url('/bridge-silhouette.png')] bg-contain bg-bottom bg-no-repeat" />
        
        {/* Main Content */}
        <div className="relative z-10 text-center mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold text-white mb-4"
          >
            CodeShastra'25
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-hackathon-yellow mb-12"
          >
            Flagship 24-hour STME Hackathon
          </motion.p>
          
          <div className="mb-16">
            <CountdownTimer />
          </div>
          
          <div className="flex justify-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-hackathon-orange to-hackathon-yellow text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow pixel-corners"
            >
              Partner with us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-hackathon-yellow to-hackathon-orange text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow pixel-corners"
            >
              Grab your tickets now
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-white"
          >
            <p className="text-xl mb-3">Prize Pool: ₹75,000</p>
            <p className="text-hackathon-blue">
              Organized by: TechCider Club, Infinix Club, Manthan Club - NMIMS Navi Mumbai
            </p>
          </motion.div>
        </div>

        {/* Pixel Art Decorations */}
        <motion.div
          animate={{ 
            x: [-5, 5, -5],
            y: [-5, 5, -5],
            rotate: [-5, 5, -5]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-8 h-8 bg-hackathon-blue/50"
        />
        <motion.div
          animate={{ 
            x: [5, -5, 5],
            y: [5, -5, 5],
            rotate: [5, -5, 5]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-60 left-32 w-6 h-6 bg-hackathon-yellow/50"
        />
      </section>
    </div>
  );
};

export default Index;
