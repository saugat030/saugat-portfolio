import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string; // Text to animate
  typingSpeed?: number; // Delay between each character in seconds
  delayBetweenRepeats?: number; // Delay before restarting the animation in seconds
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  typingSpeed = 0.1,
  delayBetweenRepeats = 2,
}) => {
  const [currentText, setCurrentText] = useState<string>(""); // Text being displayed
  const [index, setIndex] = useState<number>(0); // Character index

  useEffect(() => {
    // Start typing effect
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed * 1000);
      return () => clearTimeout(timeout);
    } else {
      // Reset after delay
      const resetTimeout = setTimeout(() => {
        setCurrentText("");
        setIndex(0);
      }, delayBetweenRepeats * 1000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, typingSpeed, delayBetweenRepeats]);

  return (
    <div>
      <span>{currentText}</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.7,
        }}
        className="font-medium"
      >
        |
      </motion.span>
    </div>
  );
};

export default TypewriterText;
