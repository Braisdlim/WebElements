export default function Badge({ children = 'Etiqueta' }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-700 select-none">
      {children}
    </span>
  );
} 