import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const reviewVariants = [
  {
    name: "Basic Review",
    code: `<div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
  <div className="flex items-center gap-4 mb-3">
    <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
      <span className="text-white text-sm">JD</span>
    </div>
    <div>
      <h4 className="text-white font-medium">John Doe</h4>
      <div className="flex items-center gap-1">
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-zinc-400 text-sm">2 days ago</span>
      </div>
    </div>
  </div>
  <p className="text-zinc-300 text-sm">
    Excellent product! The quality is outstanding and delivery was fast. Highly recommend!
  </p>
</div>`,
    preview: (
      <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">JD</span>
          </div>
          <div>
            <h4 className="text-white font-medium">John Doe</h4>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-zinc-400 text-sm">2 days ago</span>
            </div>
          </div>
        </div>
        <p className="text-zinc-300 text-sm">
          Excellent product! The quality is outstanding and delivery was fast. Highly recommend!
        </p>
      </div>
    )
  },
  {
    name: "Review with Rating Breakdown",
    code: `<div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
  <div className="flex items-center gap-4 mb-4">
    <div className="text-center">
      <div className="text-3xl font-bold text-white">4.8</div>
      <div className="text-yellow-400 text-sm">★★★★★</div>
      <div className="text-zinc-400 text-xs">Based on 127 reviews</div>
    </div>
    <div className="flex-1 space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-zinc-400 text-sm">5</span>
        <div className="flex-1 h-2 bg-zinc-800 rounded-full">
          <div className="w-4/5 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        <span className="text-zinc-400 text-xs">80%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-zinc-400 text-sm">4</span>
        <div className="flex-1 h-2 bg-zinc-800 rounded-full">
          <div className="w-1/5 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        <span className="text-zinc-400 text-xs">15%</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.8</div>
            <div className="text-yellow-400 text-sm">★★★★★</div>
            <div className="text-zinc-400 text-xs">Based on 127 reviews</div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">5</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full">
                <div className="w-4/5 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-zinc-400 text-xs">80%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">4</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full">
                <div className="w-1/5 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-zinc-400 text-xs">15%</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Review Form",
    code: `<div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
  <h3 className="text-white font-medium mb-4">Write a Review</h3>
  <div className="space-y-4">
    <div>
      <label className="block text-zinc-300 text-sm mb-2">Rating</label>
      <div className="flex gap-1">
        <button className="text-2xl text-yellow-400 hover:text-yellow-300">★</button>
        <button className="text-2xl text-yellow-400 hover:text-yellow-300">★</button>
        <button className="text-2xl text-yellow-400 hover:text-yellow-300">★</button>
        <button className="text-2xl text-zinc-600 hover:text-yellow-300">★</button>
        <button className="text-2xl text-zinc-600 hover:text-yellow-300">★</button>
      </div>
    </div>
    <div>
      <label className="block text-zinc-300 text-sm mb-2">Title</label>
      <input 
        type="text" 
        placeholder="Summary of your experience"
        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
      />
    </div>
    <div>
      <label className="block text-zinc-300 text-sm mb-2">Review</label>
      <textarea 
        placeholder="Share your experience..."
        rows="4"
        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
      ></textarea>
    </div>
    <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
      Submit Review
    </button>
  </div>
</div>`,
    preview: (
      <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
        <h3 className="text-white font-medium mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-zinc-300 text-sm mb-2">Rating</label>
            <div className="flex gap-1">
              <button className="text-2xl text-yellow-400 hover:text-yellow-300">★</button>
              <button className="text-2xl text-yellow-400 hover:text-yellow-300">★</button>
              <button className="text-2xl text-yellow-400 hover:text-yellow-300">★</button>
              <button className="text-2xl text-zinc-600 hover:text-yellow-300">★</button>
              <button className="text-2xl text-zinc-600 hover:text-yellow-300">★</button>
            </div>
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">Title</label>
            <input 
              type="text" 
              placeholder="Summary of your experience"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>
          <div>
            <label className="block text-zinc-300 text-sm mb-2">Review</label>
            <textarea 
              placeholder="Share your experience..."
              rows="4"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            ></textarea>
          </div>
          <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
            Submit Review
          </button>
        </div>
      </div>
    )
  },
  {
    name: "Review List",
    code: `<div className="space-y-4">
  <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">JD</span>
        </div>
        <span className="text-white font-medium text-sm">John Doe</span>
      </div>
      <span className="text-zinc-400 text-xs">Verified Purchase</span>
    </div>
    <div className="flex items-center gap-1 mb-2">
      <span className="text-yellow-400">★★★★★</span>
      <span className="text-zinc-400 text-xs">2 days ago</span>
    </div>
    <p className="text-zinc-300 text-sm">
      Great product! Exactly what I was looking for. Fast shipping and excellent customer service.
    </p>
  </div>
  
  <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">JS</span>
        </div>
        <span className="text-white font-medium text-sm">Jane Smith</span>
      </div>
      <span className="text-zinc-400 text-xs">Verified Purchase</span>
    </div>
    <div className="flex items-center gap-1 mb-2">
      <span className="text-yellow-400">★★★★☆</span>
      <span className="text-zinc-400 text-xs">1 week ago</span>
    </div>
    <p className="text-zinc-300 text-sm">
      Good quality but shipping took longer than expected. Overall satisfied with the purchase.
    </p>
  </div>
</div>`,
    preview: (
      <div className="space-y-4">
        <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">JD</span>
              </div>
              <span className="text-white font-medium text-sm">John Doe</span>
            </div>
            <span className="text-zinc-400 text-xs">Verified Purchase</span>
          </div>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-zinc-400 text-xs">2 days ago</span>
          </div>
          <p className="text-zinc-300 text-sm">
            Great product! Exactly what I was looking for. Fast shipping and excellent customer service.
          </p>
        </div>
        
        <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">JS</span>
              </div>
              <span className="text-white font-medium text-sm">Jane Smith</span>
            </div>
            <span className="text-zinc-400 text-xs">Verified Purchase</span>
          </div>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-zinc-400 text-xs">1 week ago</span>
          </div>
          <p className="text-zinc-300 text-sm">
            Good quality but shipping took longer than expected. Overall satisfied with the purchase.
          </p>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Review() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Review</h1>
          <p className="text-lg text-zinc-400">
            Sistemas de reseñas con formularios, calificaciones y listas de comentarios.
          </p>
        </header>

        <div className="space-y-8">
          {reviewVariants.map((variant, index) => (
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