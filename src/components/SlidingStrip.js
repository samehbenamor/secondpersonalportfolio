import { motion } from "framer-motion";
import React from "react";
export const SlidingStrip = () => {
  return (
    <section>
    <div className="long-rectangle">
      <div className="text-motion-container">
        <motion.div
          className="sliding-text"
          initial={{ x: -600 }}
          animate={{ x: 1800 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          Graphic designer
        </motion.div>

        <motion.div
          className="sliding-text"
          initial={{ x: -600 }}
          animate={{ x: 1800 }}
          transition={{
            delay: 3,
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Web developer
        </motion.div>
        <motion.div
          className="sliding-text"
          initial={{ x: -600 }}
          animate={{ x: 1800 }}
          transition={{
            delay: 6,
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Music producer
        </motion.div>
        <motion.div
          className="sliding-text"
          initial={{ x: -600 }}
          animate={{ x: 1800 }}
         
          transition={{
            delay: 11,
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          👋
        </motion.div>
      </div>
    </div>
    </section>
  );
};
