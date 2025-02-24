import { motion } from "framer-motion";


export const Sponsors = () => {
  const sponsors = [
    {
      name: "Rejlers",
      logo: "/rejlers.jpg",
      tier: "platinum"
    },
    {
      name: "Enzigma",
      logo: "/enzigma.png",
      tier: "platinum"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="sponsors" className="relative py-20 px-4 sm:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-purple via-hackathon-purple/95 to-hackathon-purple z-0" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-hackathon-purple to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-hackathon-purple to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,#ffffff33_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white relative z-10"
        >
          Our Partners
        </motion.h2>
          </div>
          <p className="text-lg text-hackathon-yellow/80 max-w-2xl mx-auto">
            Empowering innovation through partnership. Meet the organizations making Echelon'25 possible.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hackathon-yellow/20 to-hackathon-orange/20 rounded-xl transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-hackathon-yellow/50 transition-colors duration-300">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1 text-sm text-hackathon-yellow bg-hackathon-yellow/10 rounded-full uppercase tracking-wider">
                    {sponsor.tier} Sponsor
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};