import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const buttonVariants = [
  {
    name: 'Primario',
    code: `<button className="px-4 py-2 bg-zinc-900 text-white rounded border border-zinc-700 hover:bg-zinc-800 transition">Primario</button>`,
    preview: (
      <button className="px-4 py-2 bg-zinc-900 text-white rounded border border-zinc-700 hover:bg-zinc-800 transition">Primario</button>
    ),
  },
  {
    name: 'Secundario',
    code: `<button className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded border border-zinc-700 hover:bg-zinc-700 transition">Secundario</button>`,
    preview: (
      <button className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded border border-zinc-700 hover:bg-zinc-700 transition">Secundario</button>
    ),
  },
  {
    name: 'Deshabilitado',
    code: `<button className="px-4 py-2 bg-zinc-900 text-zinc-500 rounded border border-zinc-700 opacity-50 cursor-not-allowed" disabled>Deshabilitado</button>`,
    preview: (
      <button className="px-4 py-2 bg-zinc-900 text-zinc-500 rounded border border-zinc-700 opacity-50 cursor-not-allowed" disabled>Deshabilitado</button>
    ),
  },
  {
    name: 'Con icono',
    code: `<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded border border-zinc-700 hover:bg-zinc-800 transition">
  <span className="material-symbols-outlined">star</span>
  Favorito
</button>`,
    preview: (
      <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded border border-zinc-700 hover:bg-zinc-800 transition">
        <span className="material-symbols-outlined">star</span>
        Favorito
      </button>
    ),
  },
  {
    name: 'Solo icono',
    code: `<button className="p-2 bg-zinc-900 text-white rounded-full border border-zinc-700 hover:bg-zinc-800 transition">
  <span className="material-symbols-outlined">more_vert</span>
</button>`,
    preview: (
      <button className="p-2 bg-zinc-900 text-white rounded-full border border-zinc-700 hover:bg-zinc-800 transition">
        <span className="material-symbols-outlined">more_vert</span>
      </button>
    ),
  },
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function ButtonExamples() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button
          className="mb-8 px-4 py-2 bg-zinc-900 text-zinc-200 border border-zinc-700 rounded hover:bg-zinc-800 transition"
          onClick={() => navigate(-1)}
        >
          ← Volver a la galería
        </button>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Button</h1>
        <p className="text-lg text-zinc-400 mb-8">Botones que disparan una acción como enviar un formulario o mostrar/ocultar un componente de interfaz.</p>
        <div className="flex flex-col gap-6">
          {buttonVariants.map((variant, i) => (
            <div key={variant.name} className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 shadow flex flex-col gap-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-zinc-200 font-semibold text-sm w-32">{variant.name}</span>
                <div>{variant.preview}</div>
                <button
                  className="ml-auto text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700 transition"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {expanded === i ? 'Ocultar código' : 'Ver código'}
                </button>
              </div>
              <AnimatePresence>
                {expanded === i && (
                  <div className="relative">
                    <SyntaxHighlighter
                      language="jsx"
                      style={duotoneDark}
                      customStyle={{ borderRadius: '0.75rem', fontSize: '0.95em', padding: '1em', background: 'none' }}
                      className="bg-zinc-950 border border-zinc-800"
                    >
                      {variant.code}
                    </SyntaxHighlighter>
                    <button
                      className="absolute top-2 right-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded px-2 py-1 text-xs font-semibold transition border border-zinc-700"
                      onClick={() => copyToClipboard(variant.code)}
                      aria-label={`Copiar código de ${variant.name}`}
                    >
                      Copiar
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 