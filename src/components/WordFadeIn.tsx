import { motion } from 'motion/react';
import React from 'react';

interface WordFadeInProps {
  text: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function WordFadeIn({ text, delay = 0, className = "", as: Component = "span" }: WordFadeInProps) {
  // Split by whitespace or <br/>, keeping the <br/> in the array
  const tokens = text.split(/(<br\s*\/?>|\s+)/).filter(Boolean);
  
  let delayIndex = 0;

  return (
    <Component className={className}>
      {tokens.map((token, index) => {
        if (token.trim() === '') {
          return <span key={index}>{token}</span>; // Preserve whitespace
        }
        if (/<br\s*\/?>/.test(token)) {
          return <br key={index} />;
        }
        
        const currentDelay = delay + (delayIndex * 0.1);
        delayIndex++;
        
        return (
          <span key={index} className="inline-block">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: currentDelay, duration: 0.8 }}
              className="inline-block"
            >
              {token}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}

