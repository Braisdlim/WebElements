import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const alertVariants = [
  {
    name: "Success Alert",
    code: `<div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <span className="text-green-400 text-lg">✓</span>
    <div className="flex-1">
      <h4 className="text-green-300 font-medium mb-1">Success!</h4>
      <p className="text-green-200 text-sm">
        Your changes have been saved successfully.
      </p>
    </div>
  </div>
</div>`,
    preview: <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4"><div className="flex items-start gap-3"><span className="text-green-400 text-lg">✓</span><div className="flex-1"><h4 className="text-green-300 font-medium mb-1">Success!</h4><p className="text-green-200 text-sm">Your changes have been saved successfully.</p></div></div></div>
  },
  {
    name: "Error Alert",
    code: `<div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <span className="text-red-400 text-lg">✕</span>
    <div className="flex-1">
      <h4 className="text-red-300 font-medium mb-1">Error!</h4>
      <p className="text-red-200 text-sm">
        There was an error processing your request.
      </p>
    </div>
  </div>
</div>`,
    preview: <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4"><div className="flex items-start gap-3"><span className="text-red-400 text-lg">✕</span><div className="flex-1"><h4 className="text-red-300 font-medium mb-1">Error!</h4><p className="text-red-200 text-sm">There was an error processing your request.</p></div></div></div>
  },
  {
    name: "Warning Alert",
    code: `<div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <span className="text-yellow-400 text-lg">⚠</span>
    <div className="flex-1">
      <h4 className="text-yellow-300 font-medium mb-1">Warning!</h4>
      <p className="text-yellow-200 text-sm">
        Please review your information before proceeding.
      </p>
    </div>
  </div>
</div>`,
    preview: <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4"><div className="flex items-start gap-3"><span className="text-yellow-400 text-lg">⚠</span><div className="flex-1"><h4 className="text-yellow-300 font-medium mb-1">Warning!</h4><p className="text-yellow-200 text-sm">Please review your information before proceeding.</p></div></div></div>
  },
  {
    name: "Info Alert",
    code: `<div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <span className="text-blue-400 text-lg">ℹ</span>
    <div className="flex-1">
      <h4 className="text-blue-300 font-medium mb-1">Information</h4>
      <p className="text-blue-200 text-sm">
        This is an informational message for your reference.
      </p>
    </div>
  </div>
</div>`,
    preview: <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4"><div className="flex items-start gap-3"><span className="text-blue-400 text-lg">ℹ</span><div className="flex-1"><h4 className="text-blue-300 font-medium mb-1">Information</h4><p className="text-blue-200 text-sm">This is an informational message for your reference.</p></div></div></div>
  },
  {
    name: "Dismissible Alert",
    code: `<div className="bg-zinc-900/20 border border-zinc-500/30 rounded-lg p-4">
  <div className="flex items-start justify-between gap-3">
    <div className="flex items-start gap-3">
      <span className="text-zinc-400 text-lg">ℹ</span>
      <div className="flex-1">
        <h4 className="text-zinc-300 font-medium mb-1">Dismissible Alert</h4>
        <p className="text-zinc-200 text-sm">
          This alert can be dismissed by clicking the close button.
        </p>
      </div>
    </div>
    <button className="text-zinc-400 hover:text-zinc-200 transition-colors">
      ✕
    </button>
  </div>
</div>`,
    preview: <div className="bg-zinc-900/20 border border-zinc-500/30 rounded-lg p-4"><div className="flex items-start justify-between gap-3"><div className="flex items-start gap-3"><span className="text-zinc-400 text-lg">ℹ</span><div className="flex-1"><h4 className="text-zinc-300 font-medium mb-1">Dismissible Alert</h4><p className="text-zinc-200 text-sm">This alert can be dismissed by clicking the close button.</p></div></div><button className="text-zinc-400 hover:text-zinc-200 transition-colors">✕</button></div></div>
  },
  {
    name: "Alert with Actions",
    code: `<div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <span className="text-blue-400 text-lg">ℹ</span>
    <div className="flex-1">
      <h4 className="text-blue-300 font-medium mb-1">Action Required</h4>
      <p className="text-blue-200 text-sm mb-3">
        Please complete your profile to continue.
      </p>
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
          Complete Profile
        </button>
        <button className="px-3 py-1 border border-blue-500 text-blue-300 rounded text-sm hover:bg-blue-600/20 transition-colors">
          Later
        </button>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4"><div className="flex items-start gap-3"><span className="text-blue-400 text-lg">ℹ</span><div className="flex-1"><h4 className="text-blue-300 font-medium mb-1">Action Required</h4><p className="text-blue-200 text-sm mb-3">Please complete your profile to continue.</p><div className="flex gap-2"><button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">Complete Profile</button><button className="px-3 py-1 border border-blue-500 text-blue-300 rounded text-sm hover:bg-blue-600/20 transition-colors">Later</button></div></div></div></div>
  },
  {
    name: "Banner Alert",
    code: `<div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-4">
  <div className="flex items-center justify-center gap-3">
    <span className="text-purple-400 text-lg">🎉</span>
    <div className="text-center">
      <h4 className="text-purple-300 font-medium mb-1">Special Offer!</h4>
      <p className="text-purple-200 text-sm">
        Get 50% off on all premium features this week.
      </p>
    </div>
    <span className="text-purple-400 text-lg">🎉</span>
  </div>
</div>`,
    preview: <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-4"><div className="flex items-center justify-center gap-3"><span className="text-purple-400 text-lg">🎉</span><div className="text-center"><h4 className="text-purple-300 font-medium mb-1">Special Offer!</h4><p className="text-purple-200 text-sm">Get 50% off on all premium features this week.</p></div><span className="text-purple-400 text-lg">🎉</span></div></div>
  },
  {
    name: "Toast Alert",
    code: `<div className="fixed bottom-4 right-4 bg-zinc-900 border border-zinc-700 rounded-lg p-4 shadow-lg max-w-sm">
  <div className="flex items-start gap-3">
    <span className="text-green-400 text-lg">✓</span>
    <div className="flex-1">
      <h4 className="text-white font-medium mb-1">Success!</h4>
      <p className="text-zinc-300 text-sm">
        Your message has been sent successfully.
      </p>
    </div>
    <button className="text-zinc-400 hover:text-zinc-200 transition-colors">
      ✕
    </button>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 shadow-lg max-w-sm"><div className="flex items-start gap-3"><span className="text-green-400 text-lg">✓</span><div className="flex-1"><h4 className="text-white font-medium mb-1">Success!</h4><p className="text-zinc-300 text-sm">Your message has been sent successfully.</p></div><button className="text-zinc-400 hover:text-zinc-200 transition-colors">✕</button></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function AlertExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Alert</h1>
          <p className="text-lg text-zinc-400">
            Alertas informativas con diferentes tipos y estados. Incluye success, error, warning, info y variantes con acciones.
          </p>
        </header>

        <div className="space-y-8">
          {alertVariants.map((variant, index) => (
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