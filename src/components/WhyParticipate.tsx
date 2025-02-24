import { motion } from "framer-motion";
import { Globe2, Trophy, Users, Rocket, Brain, Award } from "lucide-react";

export const WhyParticipate = () => {
  const benefits = [
    {
      icon: Globe2,
      title: "International Internships",
      description: "Top performers get exclusive internship opportunities with leading tech companies worldwide"
    },
    {
      icon: Trophy,
      title: "Attractive Prizes",
      description: "Win cash prizes and sponsored rewards worth ₹75,000+"
    },
    {
      icon: Users,
      title: "Network Growth",
      description: "Connect with industry experts, mentors, and fellow innovators"
    },
    {
      icon: Brain,
      title: "Skill Enhancement",
      description: "Develop real-world problem-solving skills and enhance your portfolio"
    },
    {
      icon: Rocket,
      title: "Launch Your Career",
      description: "Get noticed by top recruiters and kickstart your tech career"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Earn certificates and badges to showcase your achievement"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-hackathon-purple via-hackathon-purple/95 to-hackathon-purple opacity-90" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Participate in Echelon'25?
          </h2>
          <p className="text-xl text-hackathon-yellow max-w-3xl mx-auto">
            Join the elite league of innovators and unlock unprecedented opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-hackathon-yellow/20 hover:border-hackathon-yellow/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <benefit.icon className="w-8 h-8 text-hackathon-yellow mr-3" />
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-hackathon-yellow to-hackathon-orange p-[2px] rounded-xl">
            <div className="bg-hackathon-purple px-8 py-4 rounded-xl">
              <p className="text-xl text-white">
                <span className="text-hackathon-yellow font-semibold">Winners get priority access</span> to international internship opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};