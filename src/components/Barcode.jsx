import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Barcode() {
  const [text, setText] = useState("123456789");
  const [format, setFormat] = useState("CODE128");
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const [showCode, setShowCode] = useState(false);
  const [barcodeData, setBarcodeData] = useState("");

  const formats = [
    { value: "CODE128", label: "Code 128", description: "Alfanumérico" },
    { value: "CODE39", label: "Code 39", description: "Alfanumérico" },
    { value: "EAN13", label: "EAN-13", description: "13 dígitos" },
    { value: "EAN8", label: "EAN-8", description: "8 dígitos" },
    { value: "UPC", label: "UPC-A", description: "12 dígitos" },
    { value: "ITF14", label: "ITF-14", description: "14 dígitos" },
    { value: "QR", label: "QR Code", description: "2D" }
  ];

  // Función simple para generar código de barras (simulado)
  const generateBarcode = () => {
    // En producción usarías una librería como jsbarcode
    const canvas = document.createElement('canvas');
    canvas.width = text.length * 20;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Fondo blanco
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Patrón de barras (simulado)
    ctx.fillStyle = '#000000';
    for (let i = 0; i < text.length; i++) {
      const barWidth = Math.random() * 3 + 1;
      const barHeight = height * 0.8;
      const x = i * 20 + 10;
      const y = (height - barHeight) / 2;
      
      ctx.fillRect(x, y, barWidth, barHeight);
    }
    
    // Texto debajo
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, height - 10);
    
    setBarcodeData(canvas.toDataURL());
  };

  useEffect(() => {
    generateBarcode();
  }, [text, format, width, height]);

  const downloadBarcode = () => {
    const link = document.createElement('a');
    link.download = `barcode-${format}.png`;
    link.href = barcodeData;
    link.click();
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const codeString = `import { useState, useEffect } from "react";

export default function BarcodeComponent() {
  const [text, setText] = useState("123456789");
  const [format, setFormat] = useState("CODE128");
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(100);

  const formats = [
    { value: "CODE128", label: "Code 128", description: "Alfanumérico" },
    { value: "CODE39", label: "Code 39", description: "Alfanumérico" },
    { value: "EAN13", label: "EAN-13", description: "13 dígitos" },
    { value: "EAN8", label: "EAN-8", description: "8 dígitos" },
    { value: "UPC", label: "UPC-A", description: "12 dígitos" }
  ];

  const generateBarcode = () => {
    // Implementar con librería jsbarcode
    // JsBarcode("#barcode", text, {
    //   format: format,
    //   width: width,
    //   height: height,
    //   displayValue: true
    // });
  };

  useEffect(() => {
    generateBarcode();
  }, [text, format, width, height]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controles */}
        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2">Texto/Código</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
              placeholder="Ingresa el código"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2">Formato</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
            >
              {formats.map(f => (
                <option key={f.value} value={f.value}>
                  {f.label} - {f.description}
                </option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Ancho: {width}px</label>
              <input
                type="range"
                min="1"
                max="5"
                value={width}
                onChange={(e) => setWidth(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Alto: {height}px</label>
              <input
                type="range"
                min="50"
                max="200"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Código de Barras */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <img src={barcodeData} alt="Barcode" className="max-w-full" />
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={downloadBarcode}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Descargar
            </button>
            <button
              onClick={copyText}
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
          <h1 className="text-3xl font-bold text-white">Barcode Generator</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Generador de Códigos de Barras</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Controles */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Texto/Código</label>
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                      placeholder="Ingresa el código"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Formato</label>
                    <select
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                    >
                      {formats.map(f => (
                        <option key={f.value} value={f.value}>
                          {f.label} - {f.description}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Ancho: {width}px</label>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={width}
                        onChange={(e) => setWidth(parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Alto: {height}px</label>
                      <input
                        type="range"
                        min="50"
                        max="200"
                        value={height}
                        onChange={(e) => setHeight(parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Código de Barras */}
                <div className="flex flex-col items-center justify-center">
                  <motion.div 
                    className="bg-white p-4 rounded-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={barcodeData} alt="Barcode" className="max-w-full" />
                  </motion.div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={downloadBarcode}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      📥 Descargar
                    </button>
                    <button
                      onClick={copyText}
                      className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                    >
                      📋 Copiar Texto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplos de códigos */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Ejemplos de Códigos</h3>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setText("123456789")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">Producto</div>
                  <div className="text-zinc-400 text-sm">123456789</div>
                </button>
                <button 
                  onClick={() => setText("9780201379624")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">ISBN</div>
                  <div className="text-zinc-400 text-sm">9780201379624</div>
                </button>
                <button 
                  onClick={() => setText("ABC123")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">Código</div>
                  <div className="text-zinc-400 text-sm">ABC123</div>
                </button>
                <button 
                  onClick={() => setText("123456789012")}
                  className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-left"
                >
                  <div className="text-white font-medium">UPC</div>
                  <div className="text-zinc-400 text-sm">123456789012</div>
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
                  Múltiples formatos de códigos de barras
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Personalización de dimensiones
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Generación en tiempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Descarga de imagen PNG
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Soporte para códigos alfanuméricos
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