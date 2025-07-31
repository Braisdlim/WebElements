import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const parallaxVariants = [
  {
    name: "Basic Parallax",
    code: `<div className="relative h-96 overflow-hidden">
  <div className="absolute inset-0 bg-zinc-800 transform scale-110">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
  </div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Parallax Effect</h1>
      <p className="text-lg text-zinc-300">Scroll to see the magic happen</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-800 transform scale-110">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Parallax Effect</h1>
            <p className="text-lg text-zinc-300">Scroll to see the magic happen</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Parallax with Layers",
    code: `<div className="relative h-96 overflow-hidden">
  <div className="absolute inset-0 bg-zinc-900 transform scale-110">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-900/50"></div>
  </div>
  <div className="absolute inset-0 transform scale-125">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
    <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-500/20 rounded-full blur-sm"></div>
    <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-sm"></div>
  </div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Layered Parallax</h1>
      <p className="text-lg text-zinc-300">Multiple depth layers</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900 transform scale-110">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-900/50"></div>
        </div>
        <div className="absolute inset-0 transform scale-125">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-500/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-sm"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Layered Parallax</h1>
            <p className="text-lg text-zinc-300">Multiple depth layers</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Parallax with Content",
    code: `<div className="relative h-96 overflow-hidden">
  <div className="absolute inset-0 bg-zinc-800 transform scale-110">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/50 to-zinc-900"></div>
  </div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center max-w-2xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-white mb-6">Welcome to Our Site</h1>
      <p className="text-xl text-zinc-300 mb-8">Experience the power of parallax scrolling effects</p>
      <div className="flex gap-4 justify-center">
        <button className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
          Get Started
        </button>
        <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zinc-900 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-800 transform scale-110">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/50 to-zinc-900"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6">Welcome to Our Site</h1>
            <p className="text-xl text-zinc-300 mb-8">Experience the power of parallax scrolling effects</p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zinc-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Parallax() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Parallax</h1>
          <p className="text-lg text-zinc-400">
            Efectos de paralaje para scroll que crean profundidad y movimiento.
          </p>
        </header>

        <div className="space-y-8">
          {parallaxVariants.map((variant, index) => (
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