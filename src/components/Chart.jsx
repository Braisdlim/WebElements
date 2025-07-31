import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const chartVariants = [
  {
    name: "Bar Chart",
    code: `<div className="max-w-2xl">
  <div className="bg-zinc-900 rounded-lg p-6">
    <h3 className="text-white font-semibold mb-4">Monthly Sales</h3>
    <div className="flex items-end gap-4 h-32">
      <div className="flex-1 flex flex-col items-center">
        <div className="w-8 bg-blue-500 rounded-t" style={{height: '60%'}}></div>
        <span className="text-zinc-400 text-xs mt-2">Jan</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-8 bg-blue-500 rounded-t" style={{height: '80%'}}></div>
        <span className="text-zinc-400 text-xs mt-2">Feb</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-8 bg-blue-500 rounded-t" style={{height: '40%'}}></div>
        <span className="text-zinc-400 text-xs mt-2">Mar</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-8 bg-blue-500 rounded-t" style={{height: '90%'}}></div>
        <span className="text-zinc-400 text-xs mt-2">Apr</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-8 bg-blue-500 rounded-t" style={{height: '70%'}}></div>
        <span className="text-zinc-400 text-xs mt-2">May</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-8 bg-blue-500 rounded-t" style={{height: '100%'}}></div>
        <span className="text-zinc-400 text-xs mt-2">Jun</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-2xl">
        <div className="bg-zinc-900 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">Monthly Sales</h3>
          <div className="flex items-end gap-4 h-32">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-8 bg-blue-500 rounded-t" style={{height: '60%'}}></div>
              <span className="text-zinc-400 text-xs mt-2">Jan</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-8 bg-blue-500 rounded-t" style={{height: '80%'}}></div>
              <span className="text-zinc-400 text-xs mt-2">Feb</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-8 bg-blue-500 rounded-t" style={{height: '40%'}}></div>
              <span className="text-zinc-400 text-xs mt-2">Mar</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-8 bg-blue-500 rounded-t" style={{height: '90%'}}></div>
              <span className="text-zinc-400 text-xs mt-2">Apr</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-8 bg-blue-500 rounded-t" style={{height: '70%'}}></div>
              <span className="text-zinc-400 text-xs mt-2">May</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-8 bg-blue-500 rounded-t" style={{height: '100%'}}></div>
              <span className="text-zinc-400 text-xs mt-2">Jun</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Line Chart",
    code: `<div className="max-w-2xl">
  <div className="bg-zinc-900 rounded-lg p-6">
    <h3 className="text-white font-semibold mb-4">Revenue Trend</h3>
    <div className="relative h-32">
      <svg className="w-full h-full" viewBox="0 0 200 100">
        <polyline
          points="20,80 40,60 60,70 80,40 100,50 120,30 140,45 160,25 180,35"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <circle cx="20" cy="80" r="3" fill="#3B82F6" />
        <circle cx="40" cy="60" r="3" fill="#3B82F6" />
        <circle cx="60" cy="70" r="3" fill="#3B82F6" />
        <circle cx="80" cy="40" r="3" fill="#3B82F6" />
        <circle cx="100" cy="50" r="3" fill="#3B82F6" />
        <circle cx="120" cy="30" r="3" fill="#3B82F6" />
        <circle cx="140" cy="45" r="3" fill="#3B82F6" />
        <circle cx="160" cy="25" r="3" fill="#3B82F6" />
        <circle cx="180" cy="35" r="3" fill="#3B82F6" />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-zinc-400 text-xs">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-2xl">
        <div className="bg-zinc-900 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">Revenue Trend</h3>
          <div className="relative h-32">
            <svg className="w-full h-full" viewBox="0 0 200 100">
              <polyline
                points="20,80 40,60 60,70 80,40 100,50 120,30 140,45 160,25 180,35"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <circle cx="20" cy="80" r="3" fill="#3B82F6" />
              <circle cx="40" cy="60" r="3" fill="#3B82F6" />
              <circle cx="60" cy="70" r="3" fill="#3B82F6" />
              <circle cx="80" cy="40" r="3" fill="#3B82F6" />
              <circle cx="100" cy="50" r="3" fill="#3B82F6" />
              <circle cx="120" cy="30" r="3" fill="#3B82F6" />
              <circle cx="140" cy="45" r="3" fill="#3B82F6" />
              <circle cx="160" cy="25" r="3" fill="#3B82F6" />
              <circle cx="180" cy="35" r="3" fill="#3B82F6" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-zinc-400 text-xs">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Pie Chart",
    code: `<div className="max-w-md">
  <div className="bg-zinc-900 rounded-lg p-6">
    <h3 className="text-white font-semibold mb-4">Market Share</h3>
    <div className="flex items-center gap-6">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="75.36" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="125.6" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="175.84" />
        </svg>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-white text-sm">Product A (30%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-white text-sm">Product B (50%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span className="text-white text-sm">Product C (20%)</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-md">
        <div className="bg-zinc-900 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">Market Share</h3>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="75.36" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="125.6" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="175.84" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-white text-sm">Product A (30%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-white text-sm">Product B (50%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span className="text-white text-sm">Product C (20%)</span>
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

export default function Chart() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Chart</h1>
          <p className="text-lg text-zinc-400">
            Gráficos y visualizaciones de datos para mostrar información de manera clara.
          </p>
        </header>

        <div className="space-y-8">
          {chartVariants.map((variant, index) => (
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