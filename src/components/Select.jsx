import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const selectVariants = [
  {
    name: "Basic Select",
    code: `<select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200">
  <option value="">Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>`,
    preview: <select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"><option value="">Select an option</option><option value="option1">Option 1</option><option value="option2">Option 2</option><option value="option3">Option 3</option></select>
  },
  {
    name: "Select with Label",
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-zinc-300">
    Choose Category
  </label>
  <select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200">
    <option value="">Select a category</option>
    <option value="tech">Technology</option>
    <option value="design">Design</option>
    <option value="business">Business</option>
  </select>
</div>`,
    preview: <div className="space-y-2"><label className="block text-sm font-medium text-zinc-300">Choose Category</label><select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"><option value="">Select a category</option><option value="tech">Technology</option><option value="design">Design</option><option value="business">Business</option></select></div>
  },
  {
    name: "Multiple Select",
    code: `<select multiple className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 min-h-[120px]">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
  <option value="option5">Option 5</option>
</select>`,
    preview: <select multiple className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 min-h-[120px]"><option value="option1">Option 1</option><option value="option2">Option 2</option><option value="option3">Option 3</option><option value="option4">Option 4</option><option value="option5">Option 5</option></select>
  },
  {
    name: "Select with Groups",
    code: `<select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200">
  <option value="">Select a country</option>
  <optgroup label="North America">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
  </optgroup>
  <optgroup label="Europe">
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </optgroup>
</select>`,
    preview: <select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"><option value="">Select a country</option><optgroup label="North America"><option value="us">United States</option><option value="ca">Canada</option><option value="mx">Mexico</option></optgroup><optgroup label="Europe"><option value="uk">United Kingdom</option><option value="de">Germany</option><option value="fr">France</option></optgroup></select>
  },
  {
    name: "Select with Error",
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-red-400">
    Required Field
  </label>
  <select className="w-full px-3 py-2 bg-zinc-800 border border-red-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200">
    <option value="">Please select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <p className="text-red-400 text-sm">This field is required</p>
</div>`,
    preview: <div className="space-y-2"><label className="block text-sm font-medium text-red-400">Required Field</label><select className="w-full px-3 py-2 bg-zinc-800 border border-red-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"><option value="">Please select an option</option><option value="option1">Option 1</option><option value="option2">Option 2</option></select><p className="text-red-400 text-sm">This field is required</p></div>
  },
  {
    name: "Select with Success",
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-green-400">
    Valid Selection
  </label>
  <select className="w-full px-3 py-2 bg-zinc-800 border border-green-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
    <option value="">Select an option</option>
    <option value="option1" selected>Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <p className="text-green-400 text-sm">✓ Valid selection</p>
</div>`,
    preview: <div className="space-y-2"><label className="block text-sm font-medium text-green-400">Valid Selection</label><select className="w-full px-3 py-2 bg-zinc-800 border border-green-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"><option value="">Select an option</option><option value="option1" selected>Option 1</option><option value="option2">Option 2</option></select><p className="text-green-400 text-sm">✓ Valid selection</p></div>
  },
  {
    name: "Disabled Select",
    code: `<select disabled className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-400 cursor-not-allowed">
  <option value="">This select is disabled</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>`,
    preview: <select disabled className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-400 cursor-not-allowed"><option value="">This select is disabled</option><option value="option1">Option 1</option><option value="option2">Option 2</option></select>
  },
  {
    name: "Large Select",
    code: `<select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 text-lg">
  <option value="">Select an option</option>
  <option value="option1">Large Option 1</option>
  <option value="option2">Large Option 2</option>
  <option value="option3">Large Option 3</option>
</select>`,
    preview: <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 text-lg"><option value="">Select an option</option><option value="option1">Large Option 1</option><option value="option2">Large Option 2</option><option value="option3">Large Option 3</option></select>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function SelectExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Select</h1>
          <p className="text-lg text-zinc-400">
            Menús desplegables para selecciones. Incluye variantes básicas, múltiples, con grupos y estados.
          </p>
        </header>

        <div className="space-y-8">
          {selectVariants.map((variant, index) => (
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