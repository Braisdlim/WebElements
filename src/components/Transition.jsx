import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const transitionVariants = [
  {
    name: "Fade Transition",
    code: `<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-zinc-800 rounded-lg p-6 max-w-md"
>
  <h3 className="text-white font-semibold mb-2">Fade Effect</h3>
  <p className="text-zinc-300 text-sm">Smooth fade in and out transition</p>
</motion.div>`,
    preview: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 rounded-lg p-6 max-w-md"
      >
        <h3 className="text-white font-semibold mb-2">Fade Effect</h3>
        <p className="text-zinc-300 text-sm">Smooth fade in and out transition</p>
      </motion.div>
    )
  },
  {
    name: "Slide Transition",
    code: `<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 100, opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-zinc-800 rounded-lg p-6 max-w-md"
>
  <h3 className="text-white font-semibold mb-2">Slide Effect</h3>
  <p className="text-zinc-300 text-sm">Slide in from left, out to right</p>
</motion.div>`,
    preview: (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 rounded-lg p-6 max-w-md"
      >
        <h3 className="text-white font-semibold mb-2">Slide Effect</h3>
        <p className="text-zinc-300 text-sm">Slide in from left, out to right</p>
      </motion.div>
    )
  },
  {
    name: "Scale Transition",
    code: `<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0, opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-zinc-800 rounded-lg p-6 max-w-md"
>
  <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
  <p className="text-zinc-300 text-sm">Scale up from center</p>
</motion.div>`,
    preview: (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 rounded-lg p-6 max-w-md"
      >
        <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
        <p className="text-zinc-300 text-sm">Scale up from center</p>
      </motion.div>
    )
  },
  {
    name: "Flip Transition",
    code: `<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  animate={{ rotateY: 0, opacity: 1 }}
  exit={{ rotateY: -90, opacity: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-zinc-800 rounded-lg p-6 max-w-md"
>
  <h3 className="text-white font-semibold mb-2">Flip Effect</h3>
  <p className="text-zinc-300 text-sm">3D flip transition</p>
</motion.div>`,
    preview: (
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-800 rounded-lg p-6 max-w-md"
      >
        <h3 className="text-white font-semibold mb-2">Flip Effect</h3>
        <p className="text-zinc-300 text-sm">3D flip transition</p>
      </motion.div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Transition() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-[#111] min-h-screen w-full">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
          >
            ← Volver a la galería
          </button>
        </div>
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Transition</h1>
          <p className="text-lg text-zinc-400">
            Transiciones suaves y animaciones para mejorar la experiencia del usuario.
          </p>
        </header>

        <div className="space-y-8">
          {transitionVariants.map((variant, index) => (
            <motion.div
              key={variant.name}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{variant.name}</h3>
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors text-sm"
                >
                  {expanded === index ? "Ocultar código" : "Ver código"}
                </button>
              </div>
              
              <div className="mb-4">
                {variant.preview}
              </div>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="relative">
                      <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        customStyle={{
                          margin: 0,
                          borderRadius: "8px",
                          fontSize: "14px"
                        }}
                      >
                        {variant.code}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => copyToClipboard(variant.code)}
                        className="absolute top-2 right-2 px-3 py-1 bg-zinc-700 text-white rounded text-sm hover:bg-zinc-600 transition-colors"
                      >
                        Copiar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 