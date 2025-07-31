import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const videoVariants = [
  {
    name: "Basic Video Player",
    code: `<div className="relative max-w-2xl">
  <div className="bg-zinc-900 rounded-lg overflow-hidden">
    <div className="relative">
      <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
              <div className="w-0 h-0 border-l-3 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
            </div>
          </button>
          <div className="flex-1 bg-zinc-700 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-1/3"></div>
          </div>
          <div className="text-white text-sm">1:23 / 4:56</div>
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-5 h-5 border border-white rounded"></div>
          </button>
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-5 h-5 border border-white rounded"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-2xl">
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="relative">
            <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
                  </div>
                </button>
                <div className="flex-1 bg-zinc-700 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full w-1/3"></div>
                </div>
                <div className="text-white text-sm">1:23 / 4:56</div>
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-5 h-5 border border-white rounded"></div>
                </button>
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-5 h-5 border border-white rounded"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Video Player with Thumbnails",
    code: `<div className="relative max-w-2xl">
  <div className="bg-zinc-900 rounded-lg overflow-hidden">
    <div className="relative">
      <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
              <div className="w-0 h-0 border-l-3 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
            </div>
          </button>
          <div className="flex-1 bg-zinc-700 rounded-full h-1 relative">
            <div className="bg-white h-1 rounded-full w-1/3"></div>
            <div className="absolute top-0 left-1/3 w-2 h-2 bg-white rounded-full -mt-0.5"></div>
          </div>
          <div className="text-white text-sm">1:23 / 4:56</div>
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-5 h-5 border border-white rounded"></div>
          </button>
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-5 h-5 border border-white rounded"></div>
          </button>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex gap-2 overflow-x-auto">
        <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
        <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
        <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
        <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
        <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-2xl">
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="relative">
            <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
                  </div>
                </button>
                <div className="flex-1 bg-zinc-700 rounded-full h-1 relative">
                  <div className="bg-white h-1 rounded-full w-1/3"></div>
                  <div className="absolute top-0 left-1/3 w-2 h-2 bg-white rounded-full -mt-0.5"></div>
                </div>
                <div className="text-white text-sm">1:23 / 4:56</div>
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-5 h-5 border border-white rounded"></div>
                </button>
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-5 h-5 border border-white rounded"></div>
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex gap-2 overflow-x-auto">
              <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
              <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
              <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
              <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
              <div className="w-20 h-12 bg-zinc-800 rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Video Player with Quality Options",
    code: `<div className="relative max-w-2xl">
  <div className="bg-zinc-900 rounded-lg overflow-hidden">
    <div className="relative">
      <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
              <div className="w-0 h-0 border-l-3 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
            </div>
          </button>
          <div className="flex-1 bg-zinc-700 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-1/3"></div>
          </div>
          <div className="text-white text-sm">1:23 / 4:56</div>
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-5 h-5 border border-white rounded"></div>
          </button>
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-5 h-5 border border-white rounded"></div>
          </button>
          <button className="text-white hover:text-zinc-300 transition-colors">
            <div className="w-5 h-5 border border-white rounded"></div>
          </button>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-sm">Quality: 1080p</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">720p</button>
          <button className="px-3 py-1 bg-zinc-700 text-white rounded text-sm hover:bg-zinc-600 transition-colors">1080p</button>
          <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">4K</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-2xl">
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="relative">
            <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
                  </div>
                </button>
                <div className="flex-1 bg-zinc-700 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full w-1/3"></div>
                </div>
                <div className="text-white text-sm">1:23 / 4:56</div>
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-5 h-5 border border-white rounded"></div>
                </button>
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-5 h-5 border border-white rounded"></div>
                </button>
                <button className="text-white hover:text-zinc-300 transition-colors">
                  <div className="w-5 h-5 border border-white rounded"></div>
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-white text-sm">Quality: 1080p</div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">720p</button>
                <button className="px-3 py-1 bg-zinc-700 text-white rounded text-sm hover:bg-zinc-600 transition-colors">1080p</button>
                <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">4K</button>
              </div>
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

export default function Video() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Video Player</h1>
          <p className="text-lg text-zinc-400">
            Reproductores de video con controles personalizados para una mejor experiencia multimedia.
          </p>
        </header>

        <div className="space-y-8">
          {videoVariants.map((variant, index) => (
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