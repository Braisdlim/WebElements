import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const options = [
  { label: 'Editar', value: 'edit' },
  { label: 'Duplicar', value: 'duplicate' },
  { label: 'Archivar', value: 'archive' },
  { label: 'Eliminar', value: 'delete' },
];

export default function DropdownMenu() {
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
    <div className="relative inline-block text-left" ref={ref}>
      <button
        className="px-4 py-2 bg-zinc-900 text-white border border-zinc-700 rounded-lg shadow-sm hover:bg-zinc-800 transition focus:outline-none focus:ring-2 focus:ring-zinc-500"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Opciones
        <span className="ml-2 inline-block align-middle">▼</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 w-44 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl z-20 overflow-hidden"
            role="menu"
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                className="px-4 py-2 text-zinc-200 hover:bg-zinc-800 hover:text-white cursor-pointer transition select-none text-sm"
                tabIndex={0}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
} 