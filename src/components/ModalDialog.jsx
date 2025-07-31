import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalDialog() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="px-4 py-2 bg-zinc-900 text-white border border-zinc-700 rounded-lg shadow-sm hover:bg-zinc-800 transition focus:outline-none focus:ring-2 focus:ring-zinc-500"
        onClick={() => setOpen(true)}
      >
        Abrir Modal
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22 }}
            >
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-8 max-w-sm w-full relative text-center">
                <h3 className="text-xl font-bold text-white mb-2">¡Modal abierto!</h3>
                <p className="text-zinc-400 mb-6">Este es un ejemplo de ventana modal minimalista y elegante.</p>
                <button
                  className="px-4 py-2 bg-zinc-900 text-white border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </button>
                <button
                  className="absolute top-3 right-3 text-zinc-500 hover:text-white text-xl font-bold px-2"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 