import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const avatarVariants = [
  {
    name: "Basic Avatar",
    code: `<div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
  <span className="text-white text-lg font-medium">JD</span>
</div>`,
    preview: <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-lg font-medium">JD</span></div>
  },
  {
    name: "Avatar with Image",
    code: `<div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden">
  <img 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
    alt="User"
    className="w-full h-full object-cover"
  />
</div>`,
    preview: <div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User" className="w-full h-full object-cover" /></div>
  },
  {
    name: "Large Avatar",
    code: `<div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center">
  <span className="text-white text-xl font-medium">JD</span>
</div>`,
    preview: <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-xl font-medium">JD</span></div>
  },
  {
    name: "Avatar with Status",
    code: `<div className="relative">
  <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
    <span className="text-white text-lg font-medium">JD</span>
  </div>
  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full"></div>
</div>`,
    preview: <div className="relative"><div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-lg font-medium">JD</span></div><div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full"></div></div>
  },
  {
    name: "Avatar Group",
    code: `<div className="flex -space-x-2">
  <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center border-2 border-zinc-900">
    <span className="text-white text-sm font-medium">JD</span>
  </div>
  <div className="w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center border-2 border-zinc-900">
    <span className="text-white text-sm font-medium">AB</span>
  </div>
  <div className="w-10 h-10 bg-zinc-500 rounded-full flex items-center justify-center border-2 border-zinc-900">
    <span className="text-white text-sm font-medium">CD</span>
  </div>
  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-900">
    <span className="text-white text-xs">+2</span>
  </div>
</div>`,
    preview: <div className="flex -space-x-2"><div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center border-2 border-zinc-900"><span className="text-white text-sm font-medium">JD</span></div><div className="w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center border-2 border-zinc-900"><span className="text-white text-sm font-medium">AB</span></div><div className="w-10 h-10 bg-zinc-500 rounded-full flex items-center justify-center border-2 border-zinc-900"><span className="text-white text-sm font-medium">CD</span></div><div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-900"><span className="text-white text-xs">+2</span></div></div>
  },
  {
    name: "Avatar with Name",
    code: `<div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
    <span className="text-white text-lg font-medium">JD</span>
  </div>
  <div>
    <div className="text-white font-medium">John Doe</div>
    <div className="text-zinc-400 text-sm">Software Engineer</div>
  </div>
</div>`,
    preview: <div className="flex items-center gap-3"><div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-lg font-medium">JD</span></div><div><div className="text-white font-medium">John Doe</div><div className="text-zinc-400 text-sm">Software Engineer</div></div></div>
  },
  {
    name: "Square Avatar",
    code: `<div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center">
  <span className="text-white text-lg font-medium">JD</span>
</div>`,
    preview: <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center"><span className="text-white text-lg font-medium">JD</span></div>
  },
  {
    name: "Avatar with Badge",
    code: `<div className="relative">
  <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
    <span className="text-white text-lg font-medium">JD</span>
  </div>
  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
    3
  </div>
</div>`,
    preview: <div className="relative"><div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-lg font-medium">JD</span></div><div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">3</div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function AvatarExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Avatar</h1>
          <p className="text-lg text-zinc-400">
            Avatares para mostrar perfiles de usuario. Incluye variantes básicas, con imagen, con estado, grupos y con información.
          </p>
        </header>

        <div className="space-y-8">
          {avatarVariants.map((variant, index) => (
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