import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tooltip() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="px-4 py-2 bg-zinc-900 text-white border border-zinc-700 rounded-lg shadow-sm hover:bg-zinc-800 transition focus:outline-none focus:ring-2 focus:ring-zinc-500"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        aria-describedby="tooltip-demo"
      >
        Hover o focus
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            id="tooltip-demo"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-zinc-950 text-zinc-200 text-xs rounded-lg shadow-lg border border-zinc-800 z-30 whitespace-nowrap"
            role="tooltip"
          >
            Tooltip monocromático accesible
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 