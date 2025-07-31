import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popover() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        className="px-4 py-2 bg-zinc-900 text-white border border-zinc-700 rounded-lg shadow-sm hover:bg-zinc-800 transition focus:outline-none focus:ring-2 focus:ring-zinc-500"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Mostrar Popover
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl z-20 p-4 text-zinc-200 text-sm"
            role="dialog"
          >
            <div className="mb-2 font-semibold text-white">Popover</div>
            <div>Este panel contextual aparece sobre el contenido y se cierra al hacer clic fuera.</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 