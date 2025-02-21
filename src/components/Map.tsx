import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export const Map = () => {
  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir//NMIMS+Navi+Mumbai/@19.0646141,73.0750873,17z', '_blank');
  };

  return (
    <section className="py-20 px-4 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-16"
      >
        Event Location
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="relative h-[450px] rounded-xl pixel-corners overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.908778220865!2d73.07508731469864!3d19.064614087095544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xf0562c0db43cfb40!2sNMIMS%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1652400000000!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none border border-hackathon-yellow/20 pixel-corners" />
          
          {/* Centered Pin Marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <MapPin size={48} className="text-red-500 animate-bounce" />
          </div>

          {/* Get Directions Button */}
          <button
            onClick={handleGetDirections}
            className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Navigation size={20} />
            Get Directions
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Map;