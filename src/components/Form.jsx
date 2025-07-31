import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const formVariants = [
  {
    name: "Login Form",
    code: `<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">
      Email Address
    </label>
    <input 
      type="email" 
      placeholder="your@email.com"
      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">
      Password
    </label>
    <input 
      type="password" 
      placeholder="Enter your password"
      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
    />
  </div>
  <div className="flex items-center justify-between">
    <label className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <span className="text-sm text-zinc-300">Remember me</span>
    </label>
    <a href="#" className="text-sm text-zinc-400 hover:text-zinc-300">Forgot password?</a>
  </div>
  <button 
    type="submit"
    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
  >
    Sign In
  </button>
</form>`,
    preview: <form className="space-y-4"><div><label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label><input type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Password</label><input type="password" placeholder="Enter your password" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div className="flex items-center justify-between"><label className="flex items-center"><input type="checkbox" className="mr-2" /><span className="text-sm text-zinc-300">Remember me</span></label><a href="#" className="text-sm text-zinc-400 hover:text-zinc-300">Forgot password?</a></div><button type="submit" className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Sign In</button></form>
  },
  {
    name: "Registration Form",
    code: `<form className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-2">First Name</label>
      <input 
        type="text" 
        placeholder="John"
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-2">Last Name</label>
      <input 
        type="text" 
        placeholder="Doe"
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
      />
    </div>
  </div>
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
    <input 
      type="email" 
      placeholder="your@email.com"
      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
    <input 
      type="password" 
      placeholder="Create a password"
      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
    />
  </div>
  <div className="flex items-center">
    <input type="checkbox" className="mr-2" />
    <span className="text-sm text-zinc-300">I agree to the Terms and Privacy Policy</span>
  </div>
  <button 
    type="submit"
    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
  >
    Create Account
  </button>
</form>`,
    preview: <form className="space-y-4"><div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-zinc-300 mb-2">First Name</label><input type="text" placeholder="John" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Last Name</label><input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label><input type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Password</label><input type="password" placeholder="Create a password" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div className="flex items-center"><input type="checkbox" className="mr-2" /><span className="text-sm text-zinc-300">I agree to the Terms and Privacy Policy</span></div><button type="submit" className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Create Account</button></form>
  },
  {
    name: "Contact Form",
    code: `<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
    <input 
      type="text" 
      placeholder="Your full name"
      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
    <input 
      type="email" 
      placeholder="your@email.com"
      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">Subject</label>
    <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200">
      <option>General Inquiry</option>
      <option>Support</option>
      <option>Feedback</option>
    </select>
  </div>
  <div>
    <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
    <textarea 
      rows="4"
      placeholder="Your message..."
      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
    />
  </div>
  <button 
    type="submit"
    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
  >
    Send Message
  </button>
</form>`,
    preview: <form className="space-y-4"><div><label className="block text-sm font-medium text-zinc-300 mb-2">Name</label><input type="text" placeholder="Your full name" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Email</label><input type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Subject</label><select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"><option>General Inquiry</option><option>Support</option><option>Feedback</option></select></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Message</label><textarea rows="4" placeholder="Your message..." className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" /></div><button type="submit" className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Send Message</button></form>
  },
  {
    name: "Search Form",
    code: `<form className="flex gap-2">
  <div className="flex-1 relative">
    <input 
      type="text" 
      placeholder="Search for anything..."
      className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
      🔍
    </span>
  </div>
  <button 
    type="submit"
    className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
  >
    Search
  </button>
</form>`,
    preview: <form className="flex gap-2"><div className="flex-1 relative"><input type="text" placeholder="Search for anything..." className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /><span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">🔍</span></div><button type="submit" className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Search</button></form>
  },
  {
    name: "Settings Form",
    code: `<form className="space-y-6">
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">Profile Settings</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Display Name</label>
        <input 
          type="text" 
          placeholder="Your display name"
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Bio</label>
        <textarea 
          rows="3"
          placeholder="Tell us about yourself..."
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
        />
      </div>
    </div>
  </div>
  
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
    <div className="space-y-3">
      <label className="flex items-center">
        <input type="checkbox" className="mr-3" />
        <span className="text-zinc-300">Email notifications</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-3" />
        <span className="text-zinc-300">Push notifications</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-3" />
        <span className="text-zinc-300">Dark mode</span>
      </label>
    </div>
  </div>
  
  <div className="flex gap-3">
    <button 
      type="submit"
      className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
    >
      Save Changes
    </button>
    <button 
      type="button"
      className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors"
    >
      Cancel
    </button>
  </div>
</form>`,
    preview: <form className="space-y-6"><div><h3 className="text-lg font-semibold text-white mb-4">Profile Settings</h3><div className="space-y-4"><div><label className="block text-sm font-medium text-zinc-300 mb-2">Display Name</label><input type="text" placeholder="Your display name" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Bio</label><textarea rows="3" placeholder="Tell us about yourself..." className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" /></div></div></div><div><h3 className="text-lg font-semibold text-white mb-4">Preferences</h3><div className="space-y-3"><label className="flex items-center"><input type="checkbox" className="mr-3" /><span className="text-zinc-300">Email notifications</span></label><label className="flex items-center"><input type="checkbox" className="mr-3" /><span className="text-zinc-300">Push notifications</span></label><label className="flex items-center"><input type="checkbox" className="mr-3" /><span className="text-zinc-300">Dark mode</span></label></div></div><div className="flex gap-3"><button type="submit" className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Save Changes</button><button type="button" className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors">Cancel</button></div></form>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function FormExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Form</h1>
          <p className="text-lg text-zinc-400">
            Formularios completos con validación y envío. Incluye login, registro, contacto, búsqueda y configuraciones.
          </p>
        </header>

        <div className="space-y-8">
          {formVariants.map((variant, index) => (
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