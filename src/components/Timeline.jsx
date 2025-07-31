import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const timelineVariants = [
  {
    name: "Basic Timeline",
    code: `<div className="space-y-4">
  <div className="flex items-start gap-4">
    <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
    <div className="flex-1">
      <h4 className="text-white font-medium">Project Started</h4>
      <p className="text-zinc-400 text-sm">January 15, 2024</p>
      <p className="text-zinc-300 text-sm mt-1">Initial project setup and planning phase completed.</p>
    </div>
  </div>
  <div className="flex items-start gap-4">
    <div className="w-3 h-3 bg-zinc-600 rounded-full mt-2"></div>
    <div className="flex-1">
      <h4 className="text-white font-medium">Development Phase</h4>
      <p className="text-zinc-400 text-sm">February 1, 2024</p>
      <p className="text-zinc-300 text-sm mt-1">Core features development in progress.</p>
    </div>
  </div>
  <div className="flex items-start gap-4">
    <div className="w-3 h-3 bg-zinc-600 rounded-full mt-2"></div>
    <div className="flex-1">
      <h4 className="text-white font-medium">Testing Phase</h4>
      <p className="text-zinc-400 text-sm">March 1, 2024</p>
      <p className="text-zinc-300 text-sm mt-1">Quality assurance and testing procedures.</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
          <div className="flex-1">
            <h4 className="text-white font-medium">Project Started</h4>
            <p className="text-zinc-400 text-sm">January 15, 2024</p>
            <p className="text-zinc-300 text-sm mt-1">Initial project setup and planning phase completed.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-zinc-600 rounded-full mt-2"></div>
          <div className="flex-1">
            <h4 className="text-white font-medium">Development Phase</h4>
            <p className="text-zinc-400 text-sm">February 1, 2024</p>
            <p className="text-zinc-300 text-sm mt-1">Core features development in progress.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-zinc-600 rounded-full mt-2"></div>
          <div className="flex-1">
            <h4 className="text-white font-medium">Testing Phase</h4>
            <p className="text-zinc-400 text-sm">March 1, 2024</p>
            <p className="text-zinc-300 text-sm mt-1">Quality assurance and testing procedures.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Timeline with Lines",
    code: `<div className="relative">
  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
  <div className="space-y-6">
    <div className="flex items-start gap-4">
      <div className="relative z-10 w-12 h-12 bg-zinc-800 border-2 border-white rounded-full flex items-center justify-center">
        <span className="text-white text-sm">1</span>
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium">Order Placed</h4>
        <p className="text-zinc-400 text-sm">Today at 2:30 PM</p>
        <p className="text-zinc-300 text-sm mt-1">Your order has been successfully placed.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <div className="relative z-10 w-12 h-12 bg-zinc-800 border-2 border-zinc-600 rounded-full flex items-center justify-center">
        <span className="text-zinc-400 text-sm">2</span>
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium">Processing</h4>
        <p className="text-zinc-400 text-sm">Estimated: Tomorrow</p>
        <p className="text-zinc-300 text-sm mt-1">Your order is being prepared for shipment.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <div className="relative z-10 w-12 h-12 bg-zinc-800 border-2 border-zinc-600 rounded-full flex items-center justify-center">
        <span className="text-zinc-400 text-sm">3</span>
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium">Shipped</h4>
        <p className="text-zinc-400 text-sm">Estimated: 2-3 days</p>
        <p className="text-zinc-300 text-sm mt-1">Your order will be shipped soon.</p>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="relative z-10 w-12 h-12 bg-zinc-800 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-white text-sm">1</span>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Order Placed</h4>
              <p className="text-zinc-400 text-sm">Today at 2:30 PM</p>
              <p className="text-zinc-300 text-sm mt-1">Your order has been successfully placed.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="relative z-10 w-12 h-12 bg-zinc-800 border-2 border-zinc-600 rounded-full flex items-center justify-center">
              <span className="text-zinc-400 text-sm">2</span>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Processing</h4>
              <p className="text-zinc-400 text-sm">Estimated: Tomorrow</p>
              <p className="text-zinc-300 text-sm mt-1">Your order is being prepared for shipment.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="relative z-10 w-12 h-12 bg-zinc-800 border-2 border-zinc-600 rounded-full flex items-center justify-center">
              <span className="text-zinc-400 text-sm">3</span>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Shipped</h4>
              <p className="text-zinc-400 text-sm">Estimated: 2-3 days</p>
              <p className="text-zinc-300 text-sm mt-1">Your order will be shipped soon.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Activity Timeline",
    code: `<div className="space-y-4">
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
      <span className="text-white text-xs">✓</span>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <h4 className="text-white font-medium">John Doe</h4>
        <span className="text-zinc-400 text-sm">commented on</span>
        <span className="text-blue-400 text-sm">Project Alpha</span>
      </div>
      <p className="text-zinc-300 text-sm mt-1">Great progress on the new features!</p>
      <p className="text-zinc-400 text-xs mt-1">2 hours ago</p>
    </div>
  </div>
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
      <span className="text-white text-xs">+</span>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <h4 className="text-white font-medium">Jane Smith</h4>
        <span className="text-zinc-400 text-sm">created</span>
        <span className="text-blue-400 text-sm">Task #123</span>
      </div>
      <p className="text-zinc-300 text-sm mt-1">Implement user authentication</p>
      <p className="text-zinc-400 text-xs mt-1">4 hours ago</p>
    </div>
  </div>
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
      <span className="text-white text-xs">!</span>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <h4 className="text-white font-medium">System</h4>
        <span className="text-zinc-400 text-sm">deployed</span>
        <span className="text-blue-400 text-sm">v2.1.0</span>
      </div>
      <p className="text-zinc-300 text-sm mt-1">New version successfully deployed to production</p>
      <p className="text-zinc-400 text-xs mt-1">1 day ago</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-white font-medium">John Doe</h4>
              <span className="text-zinc-400 text-sm">commented on</span>
              <span className="text-blue-400 text-sm">Project Alpha</span>
            </div>
            <p className="text-zinc-300 text-sm mt-1">Great progress on the new features!</p>
            <p className="text-zinc-400 text-xs mt-1">2 hours ago</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-white font-medium">Jane Smith</h4>
              <span className="text-zinc-400 text-sm">created</span>
              <span className="text-blue-400 text-sm">Task #123</span>
            </div>
            <p className="text-zinc-300 text-sm mt-1">Implement user authentication</p>
            <p className="text-zinc-400 text-xs mt-1">4 hours ago</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">!</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-white font-medium">System</h4>
              <span className="text-zinc-400 text-sm">deployed</span>
              <span className="text-blue-400 text-sm">v2.1.0</span>
            </div>
            <p className="text-zinc-300 text-sm mt-1">New version successfully deployed to production</p>
            <p className="text-zinc-400 text-xs mt-1">1 day ago</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Vertical Timeline",
    code: `<div className="relative">
  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <div className="relative z-10 w-8 h-8 bg-white rounded-full"></div>
      <div className="flex-1">
        <h4 className="text-white font-medium">Step 1: Planning</h4>
        <p className="text-zinc-300 text-sm">Define project requirements and scope</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative z-10 w-8 h-8 bg-zinc-600 rounded-full"></div>
      <div className="flex-1">
        <h4 className="text-white font-medium">Step 2: Design</h4>
        <p className="text-zinc-300 text-sm">Create wireframes and mockups</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative z-10 w-8 h-8 bg-zinc-600 rounded-full"></div>
      <div className="flex-1">
        <h4 className="text-white font-medium">Step 3: Development</h4>
        <p className="text-zinc-300 text-sm">Build the application features</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative z-10 w-8 h-8 bg-zinc-600 rounded-full"></div>
      <div className="flex-1">
        <h4 className="text-white font-medium">Step 4: Testing</h4>
        <p className="text-zinc-300 text-sm">Quality assurance and bug fixes</p>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative z-10 w-8 h-8 bg-white rounded-full"></div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Step 1: Planning</h4>
              <p className="text-zinc-300 text-sm">Define project requirements and scope</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative z-10 w-8 h-8 bg-zinc-600 rounded-full"></div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Step 2: Design</h4>
              <p className="text-zinc-300 text-sm">Create wireframes and mockups</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative z-10 w-8 h-8 bg-zinc-600 rounded-full"></div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Step 3: Development</h4>
              <p className="text-zinc-300 text-sm">Build the application features</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative z-10 w-8 h-8 bg-zinc-600 rounded-full"></div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Step 4: Testing</h4>
              <p className="text-zinc-300 text-sm">Quality assurance and bug fixes</p>
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

export default function Timeline() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Timeline</h1>
          <p className="text-lg text-zinc-400">
            Líneas de tiempo para mostrar eventos cronológicos y progreso de proyectos.
          </p>
        </header>

        <div className="space-y-8">
          {timelineVariants.map((variant, index) => (
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