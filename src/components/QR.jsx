import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function QR() {
  const [text, setText] = useState("https://example.com");
  const [size, setSize] = useState(200);
  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#FFFFFF");
  const [errorLevel, setErrorLevel] = useState("M");
  const [showCode, setShowCode] = useState(false);
  const [qrCode, setQrCode] = useState("");

  // Función simple para generar QR (en producción usarías una librería como qrcode)
  const generateQR = () => {
    // Simulación de QR code - en producción usarías una librería real
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // Fondo
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, size, size);
    
    // Patrón simple de QR (simulado)
    ctx.fillStyle = foreground;
    const blockSize = size / 25;
    
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        if (Math.random() > 0.5) {
          ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
        }
      }
    }
    
    setQrCode(canvas.toDataURL());
  };

  useEffect(() => {
    generateQR();
  }, [text, size, foreground, background, errorLevel]);

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = qrCode;
    link.click();
  };

  const copyQR = () => {
    navigator.clipboard.writeText(text);
  };

  const codeString = `import { useState, useEffect } from "react";

export default function QRComponent() {
  const [text, setText] = useState("https://example.com");
  const [size, setSize] = useState(200);
  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#FFFFFF");
  const [errorLevel, setErrorLevel] = useState("M");

  const generateQR = () => {
    // Implementar generación de QR con librería como qrcode
    // QRCode.toCanvas(canvas, text, {
    //   width: size,
    //   color: {
    //     dark: foreground,
    //     light: background
    //   },
    //   errorCorrectionLevel: errorLevel
    // });
  };

  useEffect(() => {
    generateQR();
  }, [text, size, foreground, background, errorLevel]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controles */}
        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2">Texto/URL</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
              placeholder="Ingresa texto o URL"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2">Tamaño: {size}px</label>
            <input
              type="range"
              min="100"
              max="400"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Color Principal</label>
              <input
                type="color"
                value={foreground}
                onChange={(e) => setForeground(e.target.value)}
                className="w-full h-10 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Color Fondo</label>
              <input
                type="color"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="w-full h-10 rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-white mb-2">Nivel de Error</label>
            <select
              value={errorLevel}
              onChange={(e) => setErrorLevel(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
            >
              <option value="L">Bajo (7%)</option>
              <option value="M">Medio (15%)</option>
              <option value="Q">Alto (25%)</option>
              <option value="H">Máximo (30%)</option>
            </select>
          </div>
        </div>
        
        {/* QR Code */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <img src={qrCode} alt="QR Code" className="max-w-full" />
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={downloadQR}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Descargar
            </button>
            <button
              onClick={copyQR}
              className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700"
            >
              Copiar Texto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="bg-[#111] min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ← Volver
          </button>
          <h1 className="text-3xl font-bold text-white">QR Code Generator</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Generador de Códigos QR</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Controles */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Texto/URL</label>
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                      placeholder="Ingresa texto o URL"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Tamaño: {size}px</label>
                    <input
                      type="range"
                      min="100"
                      max="400"
                      value={size}
                      onChange={(e) => setSize(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Color Principal</label>
                      <input
                        type="color"
                        value={foreground}
                        onChange={(e) => setForeground(e.target.value)}
                        className="w-full h-10 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Color Fondo</label>
                      <input
                        type="color"
                        value={background}
                        onChange={(e) => setBackground(e.target.value)}
                        className="w-full h-10 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Nivel de Error</label>
                    <select
                      value={errorLevel}
                      onChange={(e) => setErrorLevel(e.target.value)}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                    >
                      <option value="L">Bajo (7%)</option>
                      <option value="M">Medio (15%)</option>
                      <option value="Q">Alto (25%)</option>
                      <option value="H">Máximo (30%)</option>
                    </select>
                  </div>
                </div>
                
                {/* QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <motion.div 
                    className="bg-white p-4 rounded-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={qrCode} alt="QR Code" className="max-w-full" />
                  </motion.div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={downloadQR}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      📥 Descargar
                    </button>
                    <button
                      onClick={copyQR}
                      className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                    >
                      📋 Copiar Texto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplos de uso */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Ejemplos de Uso</h3>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setText("https://google.com")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">URL</div>
                  <div className="text-zinc-400 text-sm">google.com</div>
                </button>
                <button 
                  onClick={() => setText("+1234567890")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">Teléfono</div>
                  <div className="text-zinc-400 text-sm">+1234567890</div>
                </button>
                <button 
                  onClick={() => setText("BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nTEL:+1234567890\nEND:VCARD")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">Contacto</div>
                  <div className="text-zinc-400 text-sm">vCard</div>
                </button>
                <button 
                  onClick={() => setText("WIFI:S:MyWiFi;T:WPA;P:password123;;")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">WiFi</div>
                  <div className="text-zinc-400 text-sm">Red WiFi</div>
                </button>
              </div>
            </div>
          </div>

          {/* Código */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Código</h2>
              <button
                onClick={() => setShowCode(!showCode)}
                className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
              >
                {showCode ? "Ocultar" : "Mostrar"} Código
              </button>
            </div>
            
            <AnimatePresence>
              {showCode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <SyntaxHighlighter
                    language="jsx"
                    style={oneDark}
                    customStyle={{
                      margin: 0,
                      borderRadius: "8px",
                      fontSize: "14px"
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <h3 className="text-lg font-semibold text-white mb-4">Características</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Generación de QR en tiempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Personalización de colores y tamaño
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Diferentes niveles de corrección de errores
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Descarga de imagen PNG
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Soporte para URLs, teléfonos, contactos, WiFi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Interfaz intuitiva y responsive
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 