import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const carouselVariants = [
  {
    name: "Basic Carousel",
    code: `<div className="relative w-full max-w-2xl mx-auto">
  <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden relative">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-lg">Slide 1</span>
    </div>
    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors">
      ←
    </button>
    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors">
      →
    </button>
  </div>
  <div className="flex justify-center gap-2 mt-4">
    <div className="w-2 h-2 bg-white rounded-full"></div>
    <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
    <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
  </div>
</div>`,
    preview: (
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden relative">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-lg">Slide 1</span>
          </div>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors">
            ←
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors">
            →
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
          <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    name: "Card Carousel",
    code: `<div className="relative w-full max-w-4xl mx-auto">
  <div className="flex gap-4 overflow-hidden">
    <div className="flex-shrink-0 w-64 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
      <div className="aspect-video bg-zinc-800 rounded mb-3 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Card 1</span>
      </div>
      <h3 className="text-white font-medium mb-2">Product Title 1</h3>
      <p className="text-zinc-400 text-sm">Description of the product goes here.</p>
    </div>
    <div className="flex-shrink-0 w-64 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
      <div className="aspect-video bg-zinc-800 rounded mb-3 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Card 2</span>
      </div>
      <h3 className="text-white font-medium mb-2">Product Title 2</h3>
      <p className="text-zinc-400 text-sm">Description of the product goes here.</p>
    </div>
    <div className="flex-shrink-0 w-64 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
      <div className="aspect-video bg-zinc-800 rounded mb-3 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Card 3</span>
      </div>
      <h3 className="text-white font-medium mb-2">Product Title 3</h3>
      <p className="text-zinc-400 text-sm">Description of the product goes here.</p>
    </div>
  </div>
  <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
    ←
  </button>
  <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
    →
  </button>
</div>`,
    preview: (
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="flex gap-4 overflow-hidden">
          <div className="flex-shrink-0 w-64 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <div className="aspect-video bg-zinc-800 rounded mb-3 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Card 1</span>
            </div>
            <h3 className="text-white font-medium mb-2">Product Title 1</h3>
            <p className="text-zinc-400 text-sm">Description of the product goes here.</p>
          </div>
          <div className="flex-shrink-0 w-64 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <div className="aspect-video bg-zinc-800 rounded mb-3 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Card 2</span>
            </div>
            <h3 className="text-white font-medium mb-2">Product Title 2</h3>
            <p className="text-zinc-400 text-sm">Description of the product goes here.</p>
          </div>
          <div className="flex-shrink-0 w-64 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <div className="aspect-video bg-zinc-800 rounded mb-3 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Card 3</span>
            </div>
            <h3 className="text-white font-medium mb-2">Product Title 3</h3>
            <p className="text-zinc-400 text-sm">Description of the product goes here.</p>
          </div>
        </div>
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
          ←
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
          →
        </button>
      </div>
    )
  },
  {
    name: "Testimonial Carousel",
    code: `<div className="relative w-full max-w-3xl mx-auto">
  <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800 relative">
    <div className="text-center">
      <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">JD</span>
      </div>
      <blockquote className="text-zinc-300 text-lg mb-4">
        "This product has completely transformed our workflow. Highly recommended!"
      </blockquote>
      <div className="text-white font-medium">John Doe</div>
      <div className="text-zinc-400 text-sm">CEO, Tech Company</div>
    </div>
    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
      ←
    </button>
    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
      →
    </button>
  </div>
  <div className="flex justify-center gap-2 mt-6">
    <div className="w-3 h-3 bg-white rounded-full"></div>
    <div className="w-3 h-3 bg-zinc-600 rounded-full"></div>
    <div className="w-3 h-3 bg-zinc-600 rounded-full"></div>
  </div>
</div>`,
    preview: (
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800 relative">
          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">JD</span>
            </div>
            <blockquote className="text-zinc-300 text-lg mb-4">
              "This product has completely transformed our workflow. Highly recommended!"
            </blockquote>
            <div className="text-white font-medium">John Doe</div>
            <div className="text-zinc-400 text-sm">CEO, Tech Company</div>
          </div>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
            ←
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
            →
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-zinc-600 rounded-full"></div>
          <div className="w-3 h-3 bg-zinc-600 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    name: "Auto-play Carousel",
    code: `<div className="relative w-full max-w-2xl mx-auto">
  <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden relative">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-lg">Auto-playing Slide</span>
    </div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      <button className="w-2 h-2 bg-white rounded-full"></button>
      <button className="w-2 h-2 bg-zinc-600 rounded-full"></button>
      <button className="w-2 h-2 bg-zinc-600 rounded-full"></button>
    </div>
    <div className="absolute top-4 right-4">
      <button className="px-3 py-1 bg-black bg-opacity-50 rounded text-white text-sm hover:bg-opacity-75 transition-colors">
        ⏸️ Pause
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden relative">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-lg">Auto-playing Slide</span>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <button className="w-2 h-2 bg-white rounded-full"></button>
            <button className="w-2 h-2 bg-zinc-600 rounded-full"></button>
            <button className="w-2 h-2 bg-zinc-600 rounded-full"></button>
          </div>
          <div className="absolute top-4 right-4">
            <button className="px-3 py-1 bg-black bg-opacity-50 rounded text-white text-sm hover:bg-opacity-75 transition-colors">
              ⏸️ Pause
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

export default function Carousel() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Carousel</h1>
          <p className="text-lg text-zinc-400">
            Carruseles con navegación y autoplay para mostrar contenido deslizante.
          </p>
        </header>

        <div className="space-y-8">
          {carouselVariants.map((variant, index) => (
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