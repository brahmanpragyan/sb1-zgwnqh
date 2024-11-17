import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-12 w-full h-full">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full bg-gradient-to-b from-[#00e1ff] via-[#ff006e] to-[#b537f2]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          />
        ))}
      </div>
    </motion.div>
  );
}