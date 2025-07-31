import { useState } from 'react';

export default function Alert() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 shadow-md relative">
      <span className="text-xl">⚠️</span>
      <span className="flex-1">Esto es una alerta monocromática minimalista.</span>
      <button
        className="text-zinc-500 hover:text-white px-2 text-lg font-bold absolute right-2 top-1"
        onClick={() => setShow(false)}
        aria-label="Cerrar alerta"
      >
        ×
      </button>
    </div>
  );
} 