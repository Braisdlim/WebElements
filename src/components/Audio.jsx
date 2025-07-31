import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const audioVariants = [
  {
    name: "Basic Audio Player",
    code: `<div className="max-w-md">
  <div className="bg-zinc-900 rounded-lg p-4">
    <div className="flex items-center gap-4">
      <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
        <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
      </button>
      <div className="flex-1">
        <div className="text-white font-medium">Song Title</div>
        <div className="text-zinc-400 text-sm">Artist Name</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 bg-zinc-700 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-1/3"></div>
          </div>
          <span className="text-zinc-400 text-xs">1:23 / 3:45</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-md">
        <div className="bg-zinc-900 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
            </button>
            <div className="flex-1">
              <div className="text-white font-medium">Song Title</div>
              <div className="text-zinc-400 text-sm">Artist Name</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-zinc-700 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full w-1/3"></div>
                </div>
                <span className="text-zinc-400 text-xs">1:23 / 3:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Audio Player with Visualizer",
    code: `<div className="max-w-md">
  <div className="bg-zinc-900 rounded-lg p-4">
    <div className="flex items-center gap-4">
      <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
        <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
      </button>
      <div className="flex-1">
        <div className="text-white font-medium">Song Title</div>
        <div className="text-zinc-400 text-sm">Artist Name</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 bg-zinc-700 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-1/3"></div>
          </div>
          <span className="text-zinc-400 text-xs">1:23 / 3:45</span>
        </div>
      </div>
    </div>
    <div className="flex items-end gap-1 mt-4 h-8">
      <div className="w-1 bg-white rounded-full h-2"></div>
      <div className="w-1 bg-white rounded-full h-4"></div>
      <div className="w-1 bg-white rounded-full h-6"></div>
      <div className="w-1 bg-white rounded-full h-8"></div>
      <div className="w-1 bg-white rounded-full h-5"></div>
      <div className="w-1 bg-white rounded-full h-7"></div>
      <div className="w-1 bg-white rounded-full h-3"></div>
      <div className="w-1 bg-white rounded-full h-6"></div>
      <div className="w-1 bg-white rounded-full h-4"></div>
      <div className="w-1 bg-white rounded-full h-7"></div>
      <div className="w-1 bg-white rounded-full h-5"></div>
      <div className="w-1 bg-white rounded-full h-8"></div>
      <div className="w-1 bg-white rounded-full h-3"></div>
      <div className="w-1 bg-white rounded-full h-6"></div>
      <div className="w-1 bg-white rounded-full h-4"></div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-md">
        <div className="bg-zinc-900 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
            </button>
            <div className="flex-1">
              <div className="text-white font-medium">Song Title</div>
              <div className="text-zinc-400 text-sm">Artist Name</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-zinc-700 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full w-1/3"></div>
                </div>
                <span className="text-zinc-400 text-xs">1:23 / 3:45</span>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-1 mt-4 h-8">
            <div className="w-1 bg-white rounded-full h-2"></div>
            <div className="w-1 bg-white rounded-full h-4"></div>
            <div className="w-1 bg-white rounded-full h-6"></div>
            <div className="w-1 bg-white rounded-full h-8"></div>
            <div className="w-1 bg-white rounded-full h-5"></div>
            <div className="w-1 bg-white rounded-full h-7"></div>
            <div className="w-1 bg-white rounded-full h-3"></div>
            <div className="w-1 bg-white rounded-full h-6"></div>
            <div className="w-1 bg-white rounded-full h-4"></div>
            <div className="w-1 bg-white rounded-full h-7"></div>
            <div className="w-1 bg-white rounded-full h-5"></div>
            <div className="w-1 bg-white rounded-full h-8"></div>
            <div className="w-1 bg-white rounded-full h-3"></div>
            <div className="w-1 bg-white rounded-full h-6"></div>
            <div className="w-1 bg-white rounded-full h-4"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Audio Player with Controls",
    code: `<div className="max-w-md">
  <div className="bg-zinc-900 rounded-lg p-4">
    <div className="flex items-center gap-4">
      <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
        <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
      </button>
      <div className="flex-1">
        <div className="text-white font-medium">Song Title</div>
        <div className="text-zinc-400 text-sm">Artist Name</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 bg-zinc-700 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-1/3"></div>
          </div>
          <span className="text-zinc-400 text-xs">1:23 / 3:45</span>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between mt-4">
      <button className="text-zinc-400 hover:text-white transition-colors">
        <div className="w-5 h-5 border border-zinc-400 rounded"></div>
      </button>
      <button className="text-zinc-400 hover:text-white transition-colors">
        <div className="w-5 h-5 border border-zinc-400 rounded"></div>
      </button>
      <button className="text-zinc-400 hover:text-white transition-colors">
        <div className="w-5 h-5 border border-zinc-400 rounded"></div>
      </button>
      <button className="text-zinc-400 hover:text-white transition-colors">
        <div className="w-5 h-5 border border-zinc-400 rounded"></div>
      </button>
      <button className="text-zinc-400 hover:text-white transition-colors">
        <div className="w-5 h-5 border border-zinc-400 rounded"></div>
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-md">
        <div className="bg-zinc-900 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
            </button>
            <div className="flex-1">
              <div className="text-white font-medium">Song Title</div>
              <div className="text-zinc-400 text-sm">Artist Name</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-zinc-700 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full w-1/3"></div>
                </div>
                <span className="text-zinc-400 text-xs">1:23 / 3:45</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <div className="w-5 h-5 border border-zinc-400 rounded"></div>
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <div className="w-5 h-5 border border-zinc-400 rounded"></div>
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <div className="w-5 h-5 border border-zinc-400 rounded"></div>
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <div className="w-5 h-5 border border-zinc-400 rounded"></div>
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <div className="w-5 h-5 border border-zinc-400 rounded"></div>
            </button>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Audio() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Audio Player</h1>
          <p className="text-lg text-zinc-400">
            Reproductores de audio con visualización para una mejor experiencia multimedia.
          </p>
        </header>

        <div className="space-y-8">
          {audioVariants.map((variant, index) => (
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