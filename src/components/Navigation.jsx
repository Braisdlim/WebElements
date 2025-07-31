import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const navigationVariants = [
  {
    name: "Basic Navigation",
    code: `<nav className="bg-zinc-900 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            About
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Services
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  },
  {
    name: "Navigation with Actions",
    code: `<nav className="bg-zinc-900 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            About
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Services
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-zinc-300 hover:text-white transition-colors">
          Sign In
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-zinc-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  },
  {
    name: "Navigation with Search",
    code: `<nav className="bg-zinc-900 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="hidden md:block flex-1 max-w-md mx-8">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..."
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
          Home
        </a>
        <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
          About
        </a>
        <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
          Contact
        </a>
      </div>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  },
  {
    name: "Navigation with Dropdown",
    code: `<nav className="bg-zinc-900 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </a>
          <div className="relative group">
            <button className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products ▼
            </button>
            <div className="absolute top-full left-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors">
                  Product 1
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors">
                  Product 2
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors">
                  Product 3
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            About
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <div className="relative group">
                  <button className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Products ▼
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors">
                        Product 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors">
                        Product 2
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors">
                        Product 3
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  },
  {
    name: "Navigation with Notifications",
    code: `<nav className="bg-zinc-900 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            About
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Services
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-zinc-300 hover:text-white transition-colors">
          <span className="text-lg">🔔</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">JD</span>
        </div>
      </div>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-zinc-300 hover:text-white transition-colors">
                <span className="text-lg">🔔</span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  },
  {
    name: "Mobile Navigation",
    code: `<nav className="bg-zinc-900 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="md:hidden">
        <button className="text-zinc-300 hover:text-white p-2">
          <span className="text-lg">☰</span>
        </button>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            About
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Services
          </a>
          <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="md:hidden">
              <button className="text-zinc-300 hover:text-white p-2">
                <span className="text-lg">☰</span>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  },
  {
    name: "Breadcrumb Navigation",
    code: `<nav className="bg-zinc-900 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center space-x-2 text-sm">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            Home
          </a>
          <span className="text-zinc-600">/</span>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            Products
          </a>
          <span className="text-zinc-600">/</span>
          <span className="text-white">Current Page</span>
        </div>
      </div>
    </div>
  </div>
</nav>`,
    preview: (
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 text-sm">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </a>
                <span className="text-zinc-600">/</span>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Products
                </a>
                <span className="text-zinc-600">/</span>
                <span className="text-white">Current Page</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Navigation() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Navigation</h1>
          <p className="text-lg text-zinc-400">
            Barras de navegación para sitios web. Incluye variantes básicas, con acciones, búsqueda, dropdown y responsive.
          </p>
        </header>

        <div className="space-y-8">
          {navigationVariants.map((variant, index) => (
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