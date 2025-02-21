
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const calculateTimeLeft = () => {
  const difference = +new Date("2025-03-08") - +new Date();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center bg-hackathon-purple/30 backdrop-blur-sm px-6 py-4 rounded-lg"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-6xl font-mono font-bold text-white mb-2 tabular-nums"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
          <span className="text-hackathon-yellow text-sm uppercase tracking-wider">{unit}</span>
        </motion.div>
      ))}
    </div>
  );
};
